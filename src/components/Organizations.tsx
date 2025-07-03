import React from "react";
import lorealLogo from '../assets/images/logos/loreal.png';
import pfizerLogo from '../assets/images/logos/pfizer.png';
import usafLogo from '../assets/images/logos/usaf.png';
import nascarLogo from '../assets/images/logos/nascar.svg';
import growthloopLogo from '../assets/images/logos/growthloop.svg';

const organizations = [
  { name: "L'Oréal", src: lorealLogo },
  { name: "Pfizer", src: pfizerLogo },
  { name: "USAF", src: usafLogo },
  { name: "NASCAR", src: nascarLogo },
  { name: "Growth Loop", src: growthloopLogo },
];

const Organizations = () => (
  <section className="organizations-section" style={{ margin: '3rem 0' }}>
    <div style={{ textAlign: 'center', marginBottom: '1rem', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.02em' }}>Worked With</div>
    <div className="organization-logos" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', flexWrap: 'nowrap', maxWidth: '100%', overflowX: 'auto' }}>
      {organizations.map((org) => (
        <img
          key={org.name}
          src={org.src}
          alt={org.name + ' logo'}
          title={org.name}
          style={{ height: '76px', maxWidth: '180px', objectFit: 'contain', filter: 'drop-shadow(0 3px 10px rgba(0,0,0,0.10))' }}
        />
      ))}
    </div>
  </section>
);

export default Organizations;
