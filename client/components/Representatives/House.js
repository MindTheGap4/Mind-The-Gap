import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import RepCard from './RepCard'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

const styles = theme => ({
  root: {
    flexGrow: 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'space-between'
  }
})
class House extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allReps: [],
      selectedRep: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }
  async componentDidMount() {
    const {data} = await axios.get(
      `/api/representatives/${this.props.location.state.congress}/${
        this.props.location.state.selectedState.abbreviation
      }`
    )
    this.setState({
      allReps: data.results
    })
    console.log('allreps', this.state.allReps)
  }
  async handleClick(evt) {
    const {data} = await axios.get(`/api/representatives/singleRep/${evt.id}`)
    this.setState(
      {
        selectedRep: data.results[0]
      },
      () => {
        this.props.history.push({
          pathname: `/representatives/singleRep/${
            this.state.selectedRep.member_id
          }`,
          state: {selectedRep: this.state.selectedRep}
        })
      }
    )
  }
  render() {
    const {classes} = this.props
    const dems = this.state.allReps.filter(rep => rep.party === 'D')
    const repubs = this.state.allReps.filter(rep => rep.party === 'R')

    return (
      <div className={classes.root}>
        {repubs.length > 0 ? (
          <div>
            <h1>Republicans</h1>

            <Grid
              className={classes.paper}
              container
              spacing={40}
              style={{paddingTop: 20, justifyContent: 'space-between'}}
            >
              {repubs.map(rep => {
                return (
                  <RepCard
                    key={rep.id}
                    rep={rep}
                    handleClick={this.handleClick}
                  />
                )
              })}
            </Grid>
          </div>
        ) : (
          <h1>No Republican Representatives</h1>
        )}
        {dems.length > 0 ? (
          <div>
            <h1>Democrats</h1>
            <Grid className={classes.paper} container spacing={40}>
              {dems.map(rep => {
                return (
                  <RepCard
                    key={rep.id}
                    rep={rep}
                    handleClick={this.handleClick}
                  />
                )
              })}
            </Grid>
          </div>
        ) : (
          <h1>No Democratic Representatives</h1>
        )}
      </div>
    )
  }
}

export default withStyles(styles)(House)
