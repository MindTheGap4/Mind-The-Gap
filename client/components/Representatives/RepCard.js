import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const styles = {
  card: {
    // width: '33%',
    // margin: '0 auto',
    // minWidth: 275,
    // padding: '1 1 1 1'
    width: 275,
    height: 100
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
    height: '50%',
    width: '50%',
    paddingTop: '56.25%' // 16:9
  }
}

function SimpleCard(props) {
  const {classes, rep, handleClick} = props
  return (
    <div className="center">
      <Grid
        container
        className={classes.demo}
        justify="center"
        spacing={16}
        style={{padding: 10}}
      >
        <Button
          onClick={() => {
            handleClick(rep)
          }}
        >
          <Card className={classes.card}>
            <CardContent>
              <Typography
                variant="headline"
                align="center"
                text-align="center"
                justify-content="center"
                align-items="center"
                component="h1"
              >
                {rep.name}
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
