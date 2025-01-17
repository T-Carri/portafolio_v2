import { useTheme } from '../../context/uiContext';
import '../../styles/components/explorecomponent.scss'
import imgtopone from '../../assets/patterTarjeta.svg'
const ExploreComponent = () => {
    const { theme } = useTheme();

  return (
    <div className={`welcome_explore_component  ${theme==='dark'?'dark-theme': ''}`} >
    <div className='space_one' style={{ backgroundImage: `url(${imgtopone})` }}></div>
    <div className='explore_card'>etst</div>
    </div>
  )
}

export default ExploreComponent