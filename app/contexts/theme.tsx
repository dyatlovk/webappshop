import React, { createContext, useState } from 'react'

const ThemeContext = createContext<App.ThemeContext>({
  theme: 'dark',
  setTheme: (theme: string) => {
  },
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>('dark')
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContext