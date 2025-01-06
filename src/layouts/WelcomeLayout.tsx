import { Outlet } from "react-router-dom"
import welcomeimg from '../assets/sky.webp'


const WelcomeLayout = () => {
  return (
    <main className="welcomelayout"  style={{ backgroundImage: `url(${welcomeimg})` }}>


        <Outlet/>
    </main>
  )
}

export default WelcomeLayout