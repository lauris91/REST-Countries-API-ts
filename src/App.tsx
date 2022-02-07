import { useEffect } from 'react'

import { Header } from '@components'

import { keepTheme } from './themes'

export const App = () => {
  useEffect(() => keepTheme())

  return (
    <div className='wrapper'>
      <Header></Header>
    </div>
  )
}
