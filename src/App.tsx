


import { ThemeProvider } from './context/uiContext'
import AppRouter from './router'

function App() {


  return (
    <ThemeProvider>

      <AppRouter/>
    </ThemeProvider>
  )
}

export default App
