import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import SponsorCard from './SponsorCard'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'


const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    justifyContent: 'space-around',
    color: theme.palette.text.secondary
  }
})

class AllSponsors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSponsors: [],
      selectedSponsor: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount() {
    const {data} = await axios.get(`/api/sponsors`)
    this.setState({
      allSponsors: data
    })
  }
  async handleClick(sponsor) {
    const {data} = await axios.get(`/api/events/bySponsor/${sponsor.id}`)
    const userEvents = await axios.get(`/api/userEvents`)
    console.log('all sponsors events', data)
    console.log('user events', userEvents.data)
    const userEventIds = userEvents.data.map(event => {
      return event.event.id
    })
    console.log('userEventIds', userEventIds)
    const toShow = data.filter(event => {
      return !userEventIds.includes(event.id)
    })
    this.setState(
      {
        selectedSponsor: sponsor
      },
      () => {
        this.props.history.push({
          pathname: `/sponsors/${this.state.selectedSponsor.id}`,
          state: {selectedSponsor: this.state.selectedSponsor, events: toShow}
        })
      }
    )
  }
  render() {
    const {classes} = this.props

    return (
      <div className={classes.root}>
        <h1>Our Sponsors</h1>
        <Grid className={classes.paper} container spacing={40}>
          {this.state.allSponsors.map(sponsor => {
            return (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                handleClick={this.handleClick}
              />
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(AllSponsors)
