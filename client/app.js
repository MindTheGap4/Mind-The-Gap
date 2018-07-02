import React from 'react'
import {Appbar} from './components'
import Routes from './routes'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './components/CustomPalette'



const App = () => {
  return (
    <div>
      <MuiThemeProvider >
        <Appbar />
        <Routes />
      </MuiThemeProvider>
    </div>
  )
}

export default App
