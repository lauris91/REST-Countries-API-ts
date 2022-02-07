import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as farMoon } from '@fortawesome/free-regular-svg-icons'

import { setTheme } from '../themes'

export const Header = () => {
  const [togClass, setTogClass] = useState<string>('dark')

  const theme = localStorage.getItem('theme')

  useEffect(() => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTogClass('dark')
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTogClass('light')
    }
  }, [theme])

  const handleOnClick = (): void => {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light')
      setTogClass('light')
      return
    }
    setTheme('theme-dark')
    setTogClass('dark')
  }

  return (
    <header className='d-flex justify-content-between'>
      <div>Where in the world?</div>
      <div onClick={handleOnClick} aria-hidden='true'>
        <FontAwesomeIcon icon={togClass === 'dark' ? faMoon : farMoon} className='me-2' />
        Dark mode
      </div>
    </header>
  )
}
