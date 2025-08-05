
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <footer
      className={`w-full text-center p-4 sticky bottom-0 ${
        theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'
      }`}
    >
      © 2025 My Themed App — {theme} mode
    </footer>
  )
}

export default Footer
