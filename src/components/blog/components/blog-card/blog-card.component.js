import { Button, Grid, GridList, withStyles } from "@material-ui/core";
import withWidth, { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { FaReadme } from "react-icons/fa";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";
import TagArray from "../../../widgets/tag-array-widget/tag-array-widget.component";
import themeStyles from "./blog-card.theme.style";


function BlogCard(props) {
  const { classes, width } = props;

  let placeholderAvatar = "assets/images/avatars/avatar-2.png";
  const tagItems = [
    {
      title: "NodeJS",
      avatarSrc: placeholderAvatar,
      onTagClick: () => {}
    },
    {
      title: "Express",
      avatarSrc: placeholderAvatar,
      onTagClick: () => {}
    },
    {
      title: "Ruby",
      avatarSrc: placeholderAvatar,
      onTagClick: () => {}
    },
    {
      title: "Javascript",
      avatarSrc: placeholderAvatar,
      onTagClick: () => {}
    },
    {
      title: "Javascript",
      avatarSrc: placeholderAvatar,
      onTagClick: () => {}
    },
    {
      title: "Javascript",
      avatarSrc: placeholderAvatar,
      onTagClick: () => {}
    },
    {
      title: "Javascript",
      avatarSrc: placeholderAvatar,
      onTagClick: () => {}
    },
    {
      title: "Javascript",
      avatarSrc: placeholderAvatar,
      onTagClick: () => {}
    }
  ];

  const getMaxTags = () => {
    let maxTags;
    switch (width) {
      case "xs":
        maxTags = 1;
        break;
      case "sm":
        maxTags = 2;
        break;
      case "md":
        maxTags = 3;
        break;
      case "lg":
        maxTags = 4;
        break;
      default:
        maxTags = 5;
        break;
    }
    return maxTags;
  };

  return (
    <Grid spacing={ 0 } container direction='column' alignItems='center' justify='center'>
      <Grid item sm={ 10 } xs={ 12 }>
        <Card className={ classes.card }>
          <CardMedia
            className={ classes.image }
            image='assets/images/avatars/avatar-1.png'
            title='Placeholder Image'
          />
          <div className={ classes.details }>
            <CardContent className={ classes.content }>
              <Typography component='h5' variant='h5'>
                Title
              </Typography>
              <Typography variant='caption' color='textSecondary'>
                Date
              </Typography>
              <Typography variant={ "body1" } component={ "p" }>
                Laboriosam officia ipsum voluptates atque error vel reiciendis. Sunt a eius adipisci aut dicta ipsum. Aut dolorem incidunt ullam unde. Enim voluptas eligendi reiciendis itaque. Dolore recusandae consequatur harum
                architecto beatae. Pariatur nostrum quis fugiat est ex omnis.
              </ Typography>
            </CardContent>
            <Grid container direction={ "row" } spacing={ 0 } alignContent={ "space-between" } justify={ "space-between" }>
              <Grid item className={ classes.tagGrid }>
                <TagArray tagItems={ tagItems.slice(0, getMaxTags()) } />
              </Grid>
              <Grid item>
                <Button aria-label={ "continue reading" } color={ "primary" } type={ "button" } variant={ "outlined" } className={ classes.continueBtn }>
                  <Grid container spacing={ 16 } direction={ "row" } alignContent={ "flex-start" } justify={ "flex-start" }>
                    <Grid item>
                      <Typography>
                        Continue reading
                      </Typography>
                    </Grid>
                    <Grid item>
                      <FaReadme color={ "secondary" } size={ 20 } />
                    </Grid>
                  </Grid>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}


BlogCard.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withWidth({ noSSR: true }), withStyles(themeStyles, { withTheme: true }))(BlogCard);