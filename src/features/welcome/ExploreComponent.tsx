import { useTheme } from '../../context/uiContext';
import '../../styles/components/explorecomponent.scss'
import imgtopone from '../../assets/patterTarjeta.svg'
import peep from '../../assets/peep.png'
const ExploreComponent = () => {
    const { theme } = useTheme();

  return (
    <div className={`welcome_explore_component  ${theme==='dark'?'dark-theme': ''}`} >
    <div className='space_one' style={{ backgroundImage: `url(${imgtopone})` }}></div>
    <div className='explore_card'>
<div className='explore_card_img'>
  <img src={peep}  alt="Bryan Carrillo programador web imagen de identidad divertida" width={300} />
</div>
<div className='explore_card_info'>
  <div></div>
  <div className='data_card'>
    
  </div>
</div>
    </div>
    </div>
  )
}

export default ExploreComponent