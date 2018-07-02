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
    this.setState(
      {
        selectedSponsor: sponsor
      },
      () => {
        this.props.history.push({
          pathname: `/sponsors/${this.state.selectedSponsor.id}`,
          state: {selectedSponsor: this.state.selectedSponsor, events: data}
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
