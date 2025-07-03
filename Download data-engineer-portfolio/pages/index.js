import Head from 'next/head'
import Header from '../components/Header'
import Bio from '../components/Bio'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 min-h-screen flex flex-col items-center">
      <Head>
        <title>Jake Mullins | Data Engineer</title>
      </Head>
      <main className="w-full max-w-3xl mx-auto px-4">
        <Header />
        <Bio />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
