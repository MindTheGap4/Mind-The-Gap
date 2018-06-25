import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import OrgList from './orgList'
import Grid from '@material-ui/core/Grid'
import FilterOrgs from './FilterOrgs'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  card: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

class InputAdornments extends React.Component {
  constructor() {
    super()
    this.state = {
      results: [],
      filteredResults: []
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
  }

  async handleSearchSubmit(filterType, filterText) {
    const data = await axios.get(
      `/api/organizations/${filterType}/${filterText}`
    )
    const results = data.data
    this.setState({results: results, filteredResults: results})
  }
  handleFilterSubmit(filterType, filterText) {
    this.setState(prevState => {
      const newResults = prevState.results.filter(result => {
        if (filterType === 'searchTerm') {
          return result.charityName.includes(filterText.toUpperCase())
        } else if (filterType === 'city') {
          return result.city.includes(filterText.toUpperCase())
        } else if (filterType === 'state') {
          return result.state.includes(filterText.charAt(0).toUpperCase() + filterText.slice(1))
        } else if (filterType === 'zipCode') {
          return result.zipCode.includes(filterText)
        }
        return false
      })

      return {filteredResults: newResults}
    })
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <h1>Organizations</h1>
        <div className={classes.root}>
          <FilterOrgs
            onFilterSubmit={this.handleSearchSubmit}
            label="Search By:"
            button="Search"
          />
          <FilterOrgs
            onFilterSubmit={this.handleFilterSubmit}
            label="Filter by"
            button="Filter"
          />

          <OrgList results={this.state.filteredResults} />
        </div>
      </div>
    )
  }
}

InputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(InputAdornments)
