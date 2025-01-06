import { useTheme } from '../../context/uiContext';
import '../../styles/components/technologies.scss'
import navyview from '../../assets/viewNavyzoom.jpg'
import navyImg from '../../assets/navy_space.jpg'
import motorImg from '../../assets/close-up-four-newly-changed-nozzles-car-diesel-engine.jpg'
import rocketImg from '../../assets/415713-PDUWHW-914.jpg'
import rocketFullstack from '../../assets/rocket.jpg'
import infraicon from '../../assets/482215-PHG91P-836.jpg'
import motoricon from '../../assets/2002.i126.001..automated robotic packing conveyor belt set-09.jpg'
const Technologies = () => {
    const { theme } = useTheme();




  return (
    <div className={`welcome_tecnology ${theme=='dark' ?'dark-theme':'' } `}>
        <div style={{width:'80%', marginBottom:'3%'}}>

  <span className='span_tecnologias'>Tecnologias</span>
        </div>
  
  <section className='buttons_technologies'>
<div className={`item_tech  ${theme=='dark' ?'dark-theme':'' } `} style={{ backgroundImage: `url(${navyview})`, color:'gray' }}>
FRONT END
</div>
<div className={`item_tech  ${theme=='dark' ?'dark-theme':'' }`} style={{ backgroundImage: `url('https://cdn.vectorstock.com/i/1000x1000/50/26/rocket-engine-design-it-can-be-used-vector-20465026.webp')`, color:'white' }}>
    BACK END
    </div>
<div className={`item_tech  ${theme=='dark' ?'dark-theme':'' }`} style={{ backgroundImage: `url('https://c8.alamy.com/zooms/9/510b8ffc19c547dea6c99f6405671b1b/2c5bn8b.jpg')`, color:'red' }}>
    FULL STACK
    </div>

<div className={`item_tech  ${theme=='dark' ?'dark-theme':'' }`}  style={{ backgroundImage: `url(${infraicon})`, color:'black' }}>
    Infraestructura
    </div>
  </section>
  </div>
  )
}

export default Technologies


