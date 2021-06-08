import React from 'react'
import Style from './App.module.css'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home.js'
import Navbar from './components/headers/navbar/Navbar'
import Footer from './components/footer/Footer'

function App () {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Switch>
          <Route exact path={['/']} component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
