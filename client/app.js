import React from 'react'
import {Appbar, BottomNav} from './components'
import Routes from './routes'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './components/CustomPalette'

const App = () => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Appbar />
        <div
          style={{
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
        >
          <Routes />
        </div>
        <BottomNav />
      </MuiThemeProvider>
    </div>
  )
}

export default App
