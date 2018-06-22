import React from 'react'
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

const OrgList = props => {
  const {classes} = props
  const {data} = props.orgInfo
  if (data && data.data) {
    return (
      <div>
        {data.data.map(org => (
          <Grid item xs={3}>
            <Grid
              container
              className={classes.demo}
              justify="center"
              spacing={16}
            >
              <Card key={org.url} className={classes.card}>
                <CardContent>
                  <Typography variant="headline" align="center" component="h1">
                    <a href={org.url}>{org.charityName}</a>
                  </Typography>
                  <Typography variant="subheading" align="center">
                    {org.city}
                  </Typography>
                  <Typography variant="subheading" align="center">
                    {org.state}
                  </Typography>
                  <Typography variant="body2" align="center">
                    <a href={org.donationUrl}>Donate Here</a>
                  </Typography>
                  <Textfield />
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    type="submit"
                    justify="center"
                  >
                    I Donated!
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        ))}
      </div>
    )
  } else {
    return null
  }
}
OrgList.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(OrgList)
