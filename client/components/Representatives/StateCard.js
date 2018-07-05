import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const styles = {
  card: {
    width: 325,
    height: 400
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    paddingTop: '100%',
    backgroundSize: 'contain'
  },
  input: {
    display: 'none'
  }
}

function SimpleCard(props) {
  const {classes, state, handleClick} = props
  return (
    <div>
      <Grid
        key={state.name}
        container
        className={classes.demo}
        justify="space-between"
        spacing={16}
        style={{padding: 20}}
      >
        <Button
          onClick={() => {
            handleClick(state)
          }}
        >
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={state.imageUrl}
              title="State Picture"
              style={{
                display: 'block',
                backgroundSize: 'contain',
                backgroundRepeat: 'no - repeat',
                backgrounPosition: 'center'
              }}
            />
            <CardContent>
              <Typography variant="headline" align="center" component="h1">
                {state.name}
              </Typography>
            </CardContent>
          </Card>
        </Button>
      </Grid>
    </div>
  )
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleCard)
