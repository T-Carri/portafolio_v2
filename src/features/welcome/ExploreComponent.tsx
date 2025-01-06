import { useTheme } from '../../context/uiContext';
import '../../styles/components/explorecomponent.scss'

const ExploreComponent = () => {
    const { theme } = useTheme();

  return (
    <div className={`welcome_explore_component  ${theme==='dark'?'dark-theme': ''}`} >
        ExploreComponent
    </div>
  )
}

export default ExploreComponent