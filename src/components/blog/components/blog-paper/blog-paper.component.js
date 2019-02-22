import { Grid, Paper, Typography, withStyles, withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";
import compose from "recompose/compose";
import themeStyles from "./blog-paper.theme.style";


function BlogPaper(props) {
  const { classes, width, id } = props;

return (
  <Grid spacing={ 0 } container direction='column' alignItems='center' justify='center'>
    <Grid item sm={10} xs={12}>
      <Paper elevation={1} className={ classes.paper }>
        <Grid container spacing={8} direction={'column'} alignItems={'flex-start'} justify={'flex-start'}>
          <Grid item className={classes.header}>
            <Typography variant={"h2"} gutterBottom>
              Blog Post
            </Typography>
            <Typography variant={"subtitle1"} >
              By John Smith
            </Typography>
            <Typography variant={"caption"} >
              Feb 21, 2019
            </Typography>
          </Grid>
          <Grid item className={classes.content}>
            <Typography variant={'body1'} component={'p'}>
              pConsequatur quasi quisquam in autem ex. Est aut aut dolorum occaecati sed.ppBlanditiis quibusdam et nulla qui laboriosam soluta adipisci et. Ea qui et nihil eum architecto. Rerum adipisci quo optio magnam voluptatum quia.ppQuia deserunt earum a sit sed explicabo a. Tempore dolor itaque architecto molestiae. Dolorem ut nostrum dolores rerum et in. Similique beatae quasi non nemo voluptatem reprehenderit rerum.p,fromnameChasity Pagac,emailahansenhotmail.com,imageassetsimagesavatarsavatar-6.png,dateMon, 29 Jan 2018 211929 0100,contentpEst non optio aperiam. Sint quasi iste cupiditate quisquam quia voluptatem. Molestiae et molestias non velit nisi.ppNecessitatibus molestias asperiores iusto. Repudiandae occaecati esse distinctio accusamus corporis. Consequatur commodi qui mollitia quis velit.ppOdio est harum nemo quia libero rerum tenetur. Facilis quo accusamus et et voluptatem. Qui placeat nesciunt rerum.ameKathryn VonRueden,emailjschmelermurazik.com,imageassetsimagesavatarsavatar-1.pngdateWed, 03 Jan 2018 184107 0100,contentiosam officia ipsum voluptates atque error vel reiciendis. Sunt a eius adipisci aut dicta ipsum. Aut dolorem incidunt ullam undenim voluptas eligendi reiciendis itaque. Dolore recusandae consequatur harum architecto beatae. Pariatur nostrum quis fugiat est ex omnisc nam quae sunt et. Impedit aliquid quas quia dicta aut. Adipisci ut voluptate ex nisi et facere.romnameChasity Pagemaihansenhotmail.com,imagassetsimagesavatarsavatar-6.pngdateSun, 14 Jan 2018 210951 0100,contenta vel nam nostrum et sit occaecati. Officiis doloremque et nisi saepe ullam vitae. Est iste possimus quia expedita sint.Qui est nulla eveniet beatae ut exercitationem. Porro id id consequatur ab. Officiis id eligendi ut dolor. Sint vitae quae doloribus et cupiditauia qui blanditiis porro commodi provident sed quae voluptatem. At et expedita nulla natus. Nemo nobis culpa repellendus nam omnis doloresnippetuga vel nam nostrum et sit occaecati. Officiis doloremque et nisi saepe ullam vitae. Est iste
              hitecto molestiae. Dolorem ut nostrum dolores rerum et in. Similique beatae quasi non nemo voluptatem reprehenderit rerum.p,fromnameChasity Pagac,emailahansenhotmail.com,imageassetsimagesavatarsavatar-6.png,dateMon, 29 Jan 2018 211929 0100,contentpEst non optio aperiam. Sint quasi iste cupiditate quisquam quia voluptatem. Molestiae et molestias non velit nisi.ppNecessitatibus molestias asperiores iusto. Repudiandae occaecati esse distinctio accusamus corporis. Consequatur commodi qui mollitia quis velit.ppOdio est harum nemo quia libero rerum tenetur. Facilis quo accusamus et et voluptatem. Qui placeat nesciunt rerum.ameKathryn VonRueden,emailjschmelermurazik.com,imageassetsimagesavatarsavatar-1.pngdateWed, 03 Jan 2018 184107 0100,contentiosam officia ipsum voluptates atque error vel reiciendis. Sunt a eius adipisci aut dicta ipsum. Aut dolorem incidunt ullam undenim voluptas eligendi reiciendis itaque. Dolore recusandae consequatur harum ar
              hitecto molestiae. Dolorem ut nostrum dolores rerum et in. Similique beatae quasi non nemo voluptatem reprehenderit rerum.p,fromnameChasity Pagac,emailahansenhotmail.com,imageassetsimagesavatarsavatar-6.png,dateMon, 29 Jan 2018 211929 0100,contentpEst non optio aperiam. Sint quasi iste cupiditate quisquam quia voluptatem. Molestiae et molestias non velit nisi.ppNecessitatibus molestias asperiores iusto. Repudiandae occaecati esse distinctio accusamus corporis. Consequatur commodi qui mollitia quis velit.ppOdio est harum nemo quia libero rerum tenetur. Facilis quo accusamus et et voluptatem. Qui placeat nesciunt rerum.ameKathryn VonRueden,emailjschmelermurazik.com,imageassetsimagesavatarsavatar-1.pngdateWed, 03 Jan 2018 184107 0100,contentiosam officia ipsum voluptates atque error vel reiciendis. Sunt a eius adipisci aut dicta ipsum. Aut dolorem incidunt ullam undenim voluptas eligendi reiciendis itaque. Dolore recusandae consequatur harum ar
              hitecto molestiae. Dolorem ut nostrum dolores rerum et in. Similique beatae quasi non nemo voluptatem reprehenderit rerum.p,fromnameChasity Pagac,emailahansenhotmail.com,imageassetsimagesavatarsavatar-6.png,dateMon, 29 Jan 2018 211929 0100,contentpEst non optio aperiam. Sint quasi iste cupiditate quisquam quia voluptatem. Molestiae et molestias non velit nisi.ppNecessitatibus molestias asperiores iusto. Repudiandae occaecati esse distinctio accusamus corporis. Consequatur commodi qui mollitia quis velit.ppOdio est harum nemo quia libero rerum tenetur. Facilis quo accusamus et et voluptatem. Qui placeat nesciunt rerum.ameKathryn VonRueden,emailjschmelermurazik.com,imageassetsimagesavatarsavatar-1.pngdateWed, 03 Jan 2018 184107 0100,contentiosam officia ipsum voluptates atque error vel reiciendis. Sunt a eius adipisci aut dicta ipsum. Aut dolorem incidunt ullam undenim voluptas eligendi reiciendis itaque. Dolore recusandae consequatur harum ar
              hitecto molestiae. Dolorem ut nostrum dolores rerum et in. Similique beatae quasi non nemo voluptatem reprehenderit rerum.p,fromnameChasity Pagac,emailahansenhotmail.com,imageassetsimagesavatarsavatar-6.png,dateMon, 29 Jan 2018 211929 0100,contentpEst non optio aperiam. Sint quasi iste cupiditate quisquam quia voluptatem. Molestiae et molestias non velit nisi.ppNecessitatibus molestias asperiores iusto. Repudiandae occaecati esse distinctio accusamus corporis. Consequatur commodi qui mollitia quis velit.ppOdio est harum nemo quia libero rerum tenetur. Facilis quo accusamus et et voluptatem. Qui placeat nesciunt rerum.ameKathryn VonRueden,emailjschmelermurazik.com,imageassetsimagesavatarsavatar-1.pngdateWed, 03 Jan 2018 184107 0100,contentiosam officia ipsum voluptates atque error vel reiciendis. Sunt a eius adipisci aut dicta ipsum. Aut dolorem incidunt ullam undenim voluptas eligendi reiciendis itaque. Dolore recusandae consequatur harum ar
              hitecto molestiae. Dolorem ut nostrum dolores rerum et in. Similique beatae quasi non nemo voluptatem reprehenderit rerum.p,fromnameChasity Pagac,emailahansenhotmail.com,imageassetsimagesavatarsavatar-6.png,dateMon, 29 Jan 2018 211929 0100,contentpEst non optio aperiam. Sint quasi iste cupiditate quisquam quia voluptatem. Molestiae et molestias non velit nisi.ppNecessitatibus molestias asperiores iusto. Repudiandae occaecati esse distinctio accusamus corporis. Consequatur commodi qui mollitia quis velit.ppOdio est harum nemo quia libero rerum tenetur. Facilis quo accusamus et et voluptatem. Qui placeat nesciunt rerum.ameKathryn VonRueden,emailjschmelermurazik.com,imageassetsimagesavatarsavatar-1.pngdateWed, 03 Jan 2018 184107 0100,contentiosam officia ipsum voluptates atque error vel reiciendis. Sunt a eius adipisci aut dicta ipsum. Aut dolorem incidunt ullam undenim voluptas eligendi reiciendis itaque. Dolore recusandae consequatur harum arhitecto molestiae. Dolorem ut nostrum dolores rerum et in. Similique beatae quasi non nemo voluptatem reprehenderit rerum.p,fromnameChasity Pagac,emailahansenhotmail.com,imageassetsimagesavatarsavatar-6.png,dateMon, 29 Jan 2018 211929 0100,contentpEst non optio aperiam. Sint quasi iste cupiditate quisquam quia voluptatem. Molestiae et molestias non velit nisi.ppNecessitatibus molestias asperiores iusto. Repudiandae occaecati esse distinctio accusamus corporis. Consequatur commodi qui mollitia quis velit.ppOdio est harum nemo quia libero rerum tenetur. Facilis quo accusamus et et voluptatem. Qui placeat nesciunt rerum.ameKathryn VonRueden,emailjschmelermurazik.com,imageassetsimagesavatarsavatar-1.pngdateWed, 03 Jan 2018 184107 0100,contentiosam officia ipsum voluptates atque error vel reiciendis. Sunt a eius adipisci aut dicta ipsum. Aut dolorem incidunt ullam undenim voluptas eligendi reiciendis itaque. Dolore recusandae consequatur harum ar

            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);
}


BlogPaper.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default compose(withWidth({noSSR: true}), withStyles(themeStyles, { withTheme: true }))(BlogPaper);