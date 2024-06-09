import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PageRouter from './PageRouter'
import { Toaster } from 'react-hot-toast'
import { AppProvider } from './ context'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppProvider>
    <PageRouter />
    <Toaster /> 
    </AppProvider>
    </>
  )
}

export default App
