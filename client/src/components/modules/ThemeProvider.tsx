import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface ThemeContextType {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Эта ошибка будет выброшена, если хук используется вне ThemeProvider
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context // Здесь TypeScript уже будет знать, что context не undefined
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('default')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'default', 'auto')
    root.classList.add(theme)

    localStorage.setItem('hs_theme', theme)

    const resetStyles = document.createElement('style')
    resetStyles.innerText = `* { transition: none !important; }`
    document.head.appendChild(resetStyles)

    setTimeout(() => {
      document.head.removeChild(resetStyles)
    }, 100)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: any) => {
      if (theme === 'auto') {
        const newTheme = e.matches ? 'dark' : 'default'
        setTheme(newTheme)
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
