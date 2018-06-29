import React, {Component} from 'react'
import {connect} from 'react-redux'
import Slider from 'react-slick'
import axios from 'axios'
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
class SimpleSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allSponsors: []
    }
  }

  async componentDidMount() {
    const {data} = await axios.get(`/api/sponsors`)
    this.setState({
      allSponsors: data
    })
  }

  render() {
    const {classes} = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    }

    return (
      <div className="sponsor-card">
        <h2> Our Sponsors</h2>
        <Slider {...settings}>
          {this.state.allSponsors.map(sponsor => {
            return (
              <div key={sponsor.id}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={sponsor.imageUrl}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                      {sponsor.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <a target="_blank" href={sponsor.url}>
                      <Button size="small">Website</Button>
                    </a>
                  </CardActions>
                </Card>
              </div>
            )
          })}
          {/* </div> */}
        </Slider>
      </div>
    )
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleSlider)
