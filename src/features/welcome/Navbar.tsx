
import '../../styles/components/Navbar.scss'
import hipoblack from '../../assets/hipoIconblack.svg'
import hipowhite from '../../assets/hipoIconwhite.svg'
import { useTheme } from "../../context/uiContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  /*   const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(prevState => !prevState);  // Cambiar el estado entre true y false
      }; */

  return (
    <nav className={`navbar ${theme==='dark'?'dark-theme': ''} `}>
<div className="navbar_content">

<img 
          src={theme==='dark' ?  hipowhite:  hipoblack } 
          alt="BMCG" 
          width={50} 
        />
<div className="config-items">
<label className="switch">
  <input type="checkbox"
    checked={theme==='dark' }  // Establece el estado del checkbox según 'isDark'
    onChange={toggleTheme}
  className="toggle"/>
  <span className="slider"></span>
  <span className="card-side"></span>
</label>
</div>
</div>
    </nav>
  )
}

export default Navbar