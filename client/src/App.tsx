import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'
import 'preline/preline'
import { IStaticMethods } from 'preline/preline'

import { Footer } from './components/modules/footer'
import { Header } from './components/modules/header'

import { ThemeProvider } from './components/modules/theme-provider'
import { Chat } from './components/modules/chat'
import { Landing } from './components/modules/landing'
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

function App() {
  const location = useLocation()

  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])

  const [order, setOrder] = useState<string>('landing')

  return (
    <ThemeProvider>
      <>
        <div className='h-screen flex flex-col'>
          <Header />
          {order === 'landing' ? (
            <Landing setOrder={setOrder} />
          ) : (
            <Chat setOrder={setOrder} />
          )}
          <Footer />
        </div>
      </>
    </ThemeProvider>
  )
}

export default App
