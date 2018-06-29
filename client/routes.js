import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  State,
  CongressChoice,
  House,
  SingleRep,
  ActivityList,
  Organizations,
  PointsHome,
  AllSponsors,
  SponsorCard,
  Home,
  SingleSponsor,
  AllEvents,
  UserEventList
} from './components'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/account/activities" component={ActivityList} />
        <Route exact path="/account/points" component={PointsHome} />
        <Route exact path="/myEvents" component={UserEventList} />
        <Route exact path="/representatives" component={State} />
        <Route
          exact
          path="/representatives/:state"
          component={CongressChoice}
        />
        <Route exact path="/representatives/:state/senate" component={House} />
        <Route exact path="/representatives/:state/house/" component={House} />
        <Route
          exact
          path="/representatives/singleRep/:repId"
          component={SingleRep}
        />
        <Route exact path="/sponsors" component={AllSponsors} />
        <Route exact path="/sponsors/:sponsorId" component={SingleSponsor} />
        <Route exact path="/events" component={AllEvents} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/organizations" component={Organizations} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        {/* <Route component={Login} /> */}
        <Route component={Home} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
