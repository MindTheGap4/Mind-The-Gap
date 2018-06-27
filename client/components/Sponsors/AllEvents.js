// import React, {Component} from 'react'
// import PropTypes from 'prop-types'
// import {withStyles} from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
// import CardMedia from '@material-ui/core/CardMedia'
// import {Link, withRouter} from 'react-router-dom'
// import EventCard from './SponsorCard'
// import Paper from '@material-ui/core/Paper'
// import Grid from '@material-ui/core/Grid'
// import axios from 'axios'
// import {connect} from 'react-redux'

// const styles = theme => ({
//   root: {
//     flexGrow: 2
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary
//   }
// })

// class AllEvents extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       allEvents: []
//     }
//     //this.handleClick = this.handleClick.bind(this)
//   }
//   async componentDidMount() {
//     const {data} = await axios.get(`/api/events`)
//     this.setState({
//       allEvents: data
//     })
//   }
//   // async handleClick(sponsor) {
//   //   const {data} = await axios.get(`/api/events/bySponsor/${sponsor.id}`)
//   //   this.setState(
//   //     {
//   //       selectedSponsor: sponsor
//   //     },
//   //     () => {
//   //       this.props.history.push({
//   //         pathname: `/sponsors/${this.state.selectedSponsor.id}`,
//   //         state: {selectedSponsor: this.state.selectedSponsor, events: data}
//   //       })
//   //     }
//   //   )
//   // }
//   render() {
//     const {classes} = this.props

//     return (
//       <div className={classes.root}>
//         <Grid className={classes.paper} container spacing={40}>
//           {this.state.allEvents.map(event => {
//             return (
//               <EventCard
//                 key={event.id}
//                 event={event}
//                 //handleClick={this.handleClick}
//               />
//             )
//           })}
//         </Grid>
//       </div>
//     )
//   }
// }

// export default withStyles(styles)(AllEvents)
