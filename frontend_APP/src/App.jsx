import React from 'react'
import MainNavigation from './Components/MainNavigation/MainNavigation'
import {Routes,Route} from 'react-router-dom'
import AllQuotes from './Components/Pages/AllQuotes'
import NewQuotes from './Components/Pages/NewQuotes'
import ShowQuotes from './Components/Pages/ShowQuotes'
const App = () => {
  return (
    <>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path="/" element={<AllQuotes/>} />
          <Route path="/new" element={<NewQuotes/>} />
          <Route path="/quotes/:id" element={<ShowQuotes />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App