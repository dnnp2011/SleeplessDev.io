import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Demo from "../../components/demo.component";

import ColorsExample from "./examples/colors-example";
import ColorsExampleRaw from "./examples/colors-example-raw";


const style = {
  link: {
    textDecoration: "none"
  }
};

const ColorsPage = () => {

  return (
    <div>
      <section className='portal-pages__header'>
        <div className='portal-pages__header-demo'>
          <Typography variant='h1' gutterBottom>
            Colors
          </Typography>
        </div>
      </section>
      <Grid container spacing={ 0 }>
        <Grid item xs={ 1 } />
        <Grid item xs={ 10 }>
          <Paper className='portal-pages__content-inner'>

            <p><a href='https://material.io/guidelines/style/color.html' style={ style.link } rel={ "noopener noreferrer nofollow" }>Color</a> in material design is inspired by bold hues juxtaposed with muted environments, deep shadows, and
              bright highlights.</p>

            <p>Introduces unexpected and vibrant colors.</p>

            <p>The Material Design color palette comprises primary and accent colors that can be used for illustration or to develop your brand colors. They’ve been designed to work harmoniously with each other.</p>

            <Typography variant='h5' gutterBottom>Palette Colors</Typography>
            <p>These color palettes comprise of primary and accent colors that can be used for illustration or to develop your brand colors. They’ve been designed to work harmoniously with each other.</p>

            <p>The color palette starts with primary colors and fills in the spectrum to create a complete and usable palette for Android, Web, and iOS.Google suggests using the 500 colors as the primary colors in your app and the other
              colors as accents colors.</p>

            <p>As well as the pre-defined palettes you can also create your own color palettes.</p>

            <Demo index={ 1 } js={ ColorsExample } raw={ ColorsExampleRaw } />
          </Paper>
        </Grid>
        <Grid item xs={ 1 } />
      </Grid>
    </div>
  );
};

export default ColorsPage;
