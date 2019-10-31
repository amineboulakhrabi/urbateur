import React from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';


export default function ContactUs(){
    return(
<Container maxWidth="100%" component="main" >
            <Grid style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Typography component="h1" variant="h3"  align="center" color="textPrimary" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective pricing table for your potential customers with this layout.
          It&apos;s built with default Material-UI components with little customization.
        </Typography>
                <CardActions>
                  <Button fullWidth variant="inlined" color="primary">
                    Contact us
                  </Button>
                </CardActions>
            </Grid>
        
        
      </Container>
    );
};