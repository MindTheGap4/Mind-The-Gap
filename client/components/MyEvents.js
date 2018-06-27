import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Textfield from './textfield'
import axios from 'axios'

const styles = theme => ({
  card: {
    minWidth: 325
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    paddingTop: '100%'
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

class MyEvents extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }
  async componentDidMount() {
    const {data} = await axios.get('/api/userEvents')
    this.setState({
      events: data
    })
  }
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <h1>My Events</h1>
        <Grid className={classes.paper} container spacing={40}>
          {this.state.events.map(event => {
            return (
              // <SponsorCard
              //   key={sponsor.id}
              //   sponsor={sponsor}
              //   handleClick={this.handleClick}
              // />
              <div>hello</div>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(MyEvents)
