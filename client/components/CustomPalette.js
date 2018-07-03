import {createMuiTheme} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#99d5ff',
      dark: '#1f76c1',
      main: '#62A4F4',
      contrastText: '#0d47a1'
    },
    secondary: {
      light: '#ff79b0',
      main: '#ff4081',
      dark: '#c60055',
      contrastText: '#ffffff'
    }
  }
})

export default theme
