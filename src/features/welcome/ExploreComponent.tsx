import { useTheme } from '../../context/uiContext';
import '../../styles/components/explorecomponent.scss'
import imgtopone from '../../assets/7783504.jpg'
const ExploreComponent = () => {
    const { theme } = useTheme();

  return (
    <div className={`welcome_explore_component  ${theme==='dark'?'dark-theme': ''}`} >
    <div className='space_one' style={{ backgroundImage: `url(${imgtopone})` }}>x</div>
    <div>y</div>
    </div>
  )
}

export default ExploreComponent