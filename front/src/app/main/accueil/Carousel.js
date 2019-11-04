import React from 'react';
import Slider from 'react-animated-slider';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import './styles.css';

import "normalize.css/normalize.css";



const content = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://i.imgur.com/ZXBtVw7.jpg"
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://i.imgur.com/DCdBXcq.jpg"
    },
    {
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://i.imgur.com/DvmN8Hx.jpg"
    }
  ];

  const useStyles = makeStyles(theme => ({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    }
  }));

export default function Carousel(){
    const classes = useStyles();



return (
    <div>
         <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <nav>
            <Link variant="button" color="textPrimary" href="/accueil#" className={classes.link}>
              Qui Sommes-nous ?
            </Link>
            <Link variant="button" color="textPrimary" href="/accueil#" className={classes.link}>
              Notre Vision
            </Link>
            <Link variant="button" color="textPrimary" href="/accueil#" className={classes.link}>
              Nos Objectifs
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Blog
            </Link>
            <Link variant="button" color="textPrimary" href="/accueil#contactus" className={classes.link}>
              Contactez-nous
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Faire un don
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Conditions d'utilisation
            </Link>
          </nav>
          </Typography>
          
          <Button href="/login" color="primary" variant="outlined" className={classes.link}>
            Login
          </Button>
          <Button href="/register" color="primary" variant="outlined" className={classes.link}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
        }

