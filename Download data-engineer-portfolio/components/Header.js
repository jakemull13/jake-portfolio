export default function Header() {
  return (
    <header className="flex flex-col items-center py-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Jake Mullins</h1>
      <p className="text-lg text-gray-500 mb-4">Data Engineer • Analytics • Cloud • Python</p>
      <nav className="flex space-x-6">
        <a href="#bio" className="text-blue-600 hover:underline hover:text-blue-800 transition">Bio</a>
        <a href="#experience" className="text-blue-600 hover:underline hover:text-blue-800 transition">Experience</a>
        <a href="#projects" className="text-blue-600 hover:underline hover:text-blue-800 transition">Projects</a>
        <a href="#contact" className="text-blue-600 hover:underline hover:text-blue-800 transition">Contact</a>
      </nav>
    </header>
  )
}
