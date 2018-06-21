import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
}

function SimpleCard(props) {
  const {classes, state} = props
  console.log(state.imageUrl)
  const bull = <span className={classes.bullet}>•</span>
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          // style={{height: 150}}
          image={state.imageUrl}
          title="State Picture"
        />
        <CardContent>
          {/* <Typography className={classes.title} color="textSecondary">
            Word of the Day
          </Typography> */}
          <Typography variant="headline" align="center" component="h1">
            {state.name}
          </Typography>
          {/* <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography> */}
          {/* <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography> */}
        </CardContent>
        {/* <CardActions>
          <Button size="small"></Button>
        </CardActions> */}
      </Card>
    </div>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleCard)
