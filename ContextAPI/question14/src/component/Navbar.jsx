import  {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {

    const {isAuth,authToggle}=useContext(AuthContext)
    const {theme, toggle}=useContext(ThemeContext)

  return (
    <div className='p-2 bg-amber-400 flex justify-center gap-25'>
        <button onClick={authToggle} className='border rounded-2xl p-2 hover:bg-sky-700 bg-yellow-950 text-white '>
            {isAuth ? 'Logout' : 'Login'}
        </button>
        <button
        onClick={toggle}
        className='border rounded-2xl p-2 hover:bg-slate-400'
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

export default Navbar