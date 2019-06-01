import {
  Divider, Grid, Paper, Typography, withStyles, withWidth
} from '@material-ui/core';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import React from 'react';
import compose from 'recompose/compose';
import { convertTimestampToDate } from '../../../../helpers/Util';
import TagArray from '../../../widgets/tag-array-widget/tag-array-widget.component';
import scss from './blog-paper.module.scss';
import themeStyles from './blog-paper.theme.style';


dayjs()
  .format();

function BlogPaper(props) {
  const { classes, width, title, author, body, tags, dateCreated, dateEdited } = props;

  //TODO: Run a vulnerability scanner on this page to check if the Markdown injection is vulnerable to XSS attacks

  return (
    <Grid container direction={'row'} spacing={0} alignContent={'center'} justify={'center'} className={scss.blog}>
      <Grid item md={8} sm={10} xs={12}>
        <Paper elevation={5} raised={'true'} className={scss['blog__paper']}>
          <Grid container spacing={8} direction={'column'} alignItems={'flex-start'} justify={'flex-start'}>
            <Grid item xs={12} className={scss['blog__header']}>
              <Typography variant={'h2'} gutterBottom className={scss['blog__title']}>
                {title}
              </Typography>
              <Typography variant={'subtitle1'} className={scss['blog__author']}>
                By {author || 'Anonymous'}
              </Typography>
              {
                dateEdited
                  ? (
                    <div>
                      <Typography variant={'caption'} className={scss['blog__posted']}>
                        {`Posted ${convertTimestampToDate(dateCreated)}`}
                      </Typography>
                      <Typography variant={'caption'} className={scss['blog__posted']}>
                        {`Last edited ${convertTimestampToDate(dateEdited)}`}
                      </Typography>
                    </div>
                  )
                  : (
                    <Typography variant={'caption'} className={scss['blog__posted']}>
                      {dateEdited ? `Last edited ${convertTimestampToDate(dateEdited)}` : `Posted ${convertTimestampToDate(dateCreated)}`}
                    </Typography>
                  )
              }
            </Grid>
            <Divider variant={'middle'} className={scss['blog__divider']} />
            <Grid item xs={12} className={scss['blog__content']} style={{ minWidth: '0' }}>
              <Typography variant={'body1'} component={'p'} dangerouslySetInnerHTML={{ __html: body }} className={scss['blog__body']} />
            </Grid>
            <Grid item xs={12} className={scss['blog__footer']}>
              {
                tags
                  ? <TagArray setTagParam={props.setTagParam} tags={tags} />
                  : null
              }
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}


BlogPaper.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  setTagParam: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  dateCreated: PropTypes.string.isRequired,
  dateEdited: PropTypes.string
};

export default compose(withWidth({ noSSR: true }), withStyles(themeStyles, { withTheme: true }))(BlogPaper);