from flask import Flask, request, jsonify
from google.cloud import bigquery
import os
import json
import datetime

app = Flask(__name__)
client = bigquery.Client()

BQ_DATASET = os.environ["BQ_DATASET"]
BQ_TABLE = os.environ["BQ_TABLE"]

@app.route("/ingest", methods=["POST"])
def ingest():
    try:
        data = request.get_json(force=True)
        if not isinstance(data, dict):
            return jsonify({"error": "Invalid JSON"}), 400

        payload_str = json.dumps(data, separators=(",", ":"))

        row = {
            "timestamp": datetime.datetime.utcnow().isoformat(),
            "source": request.headers.get("User-Agent", "unknown"),
            "payload": payload_str
        }

        table_id = f"{client.project}.{BQ_DATASET}.{BQ_TABLE}"
        errors = client.insert_rows_json(table_id, [row])
        if errors:
            print("BigQuery insert error:", errors)
            return jsonify({"error": "Insert failed", "details": errors}), 500

        return jsonify({"status": "ok"}), 200

    except Exception as e:
        print("Unhandled error:", e)
        return jsonify({"error": str(e)}), 500

# 👇 This is critical for Cloud Run
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    print(f"Starting on port {port}")
    app.run(host="0.0.0.0", port=port)