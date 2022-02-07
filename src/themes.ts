export const setTheme = (themeName: string): void => {
  localStorage.setItem('theme', themeName)
  document.documentElement.className = themeName
}

export const keepTheme = (): void => {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark')
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light')
    }

    return
  }

  setTheme('theme-dark')
}
