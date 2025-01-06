import ExploreComponent from "../features/welcome/ExploreComponent"
import Navbar from "../features/welcome/Navbar"
import cardbackground from '../assets/spaceship.jpg'
import Technologies from "../features/welcome/Technologies"
const Welcome = () => {
  return (
    <>
     <Navbar/> 
    <section className="content_welcome_page">
     <ExploreComponent/> 
  

    </section>
     <section className="bottom_welcome_page">
<Technologies/>
<div className="welcome_presentation" style={{ backgroundImage: `url(${cardbackground})` }}>

</div>
     </section>


    </>
  )
}

export default Welcome