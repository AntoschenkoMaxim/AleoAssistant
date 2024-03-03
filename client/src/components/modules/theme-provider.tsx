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
    // Применяем класс к элементу <html> в зависимости от текущей темы
    const root = document.documentElement
    root.classList.remove('dark', 'default', 'auto') // Удаляем все возможные классы тем
    root.classList.add(theme) // Добавляем текущий класс темы

    // Сохраняем тему в localStorage для сохранения выбора пользователя
    localStorage.setItem('hs_theme', theme)

    // Удаление стилей перехода при первой загрузке для предотвращения визуальных скачков
    const resetStyles = document.createElement('style')
    resetStyles.innerText = `* { transition: none !important; }`
    document.head.appendChild(resetStyles)

    // Удаление временных стилей перехода после короткой задержки
    setTimeout(() => {
      document.head.removeChild(resetStyles)
    }, 100) // 100 мс задержка для обеспечения применения стилей перехода

    // Добавление обработчика для автоматического переключения темы при изменении системных настроек
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: any) => {
      // Автоматическое применение темы в зависимости от системных настроек
      // только если пользователь выбрал автоматическую тему
      if (theme === 'auto') {
        const newTheme = e.matches ? 'dark' : 'default'
        setTheme(newTheme)
      }
    }
    mediaQuery.addEventListener('change', handleChange)

    // Убираем обработчик события при размонтировании компонента
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
