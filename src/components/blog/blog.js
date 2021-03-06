import { Collapse, Divider, Fab, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { ExpandMore } from '@material-ui/icons';
import classNames from 'classnames';
import dayjs from 'dayjs';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import { getStringFromMonth } from '../../helpers/Util';
import LinkListWidget from '../widgets/link-list-widget/link-list-widget.component';
import TempDrawerWidget from '../widgets/temp-drawer-widget/temp-drawer-widget.component';
import WarningSign from '../widgets/warning-sign-widget/warning-sign-widget.component';
import scss from './blog.module.scss';

import themeStyles from './blog.style';

import BlogOverview from './components/blog-overview/blog-overview.component';
import BlogView from './components/blog-view/blog-view.component';


class Blog extends React.Component {

  constructor(props) {

    super(props);

    dayjs()
    .format();
    const params = new URLSearchParams(this.props.location.search);

    this.state = {
      blogViewId: this.props.match.params.id ? this.props.match.params.id : null,
      month: ((params.has('month') && params.get('month')) || null),
      year: ((params.has('year') && params.get('year')) || null),
      // month: ((params.has('month') && params.get('month')) || (dayjs().month() + 1).toString()),
      // year: ((params.has('year') && params.get('year')) || dayjs().year().toString()),
      tag: ((params.has('tag') && params.get('tag')) || null),
      limit: ((params.has('limit') && params.get('limit')) || null),
      archiveDrawerOpen: false,
      tagList: null
    };

    this.toggleArchiveDrawer = this.toggleArchiveDrawer.bind(this);

  }

  componentDidMount() {
    document.title = 'Blog | SleeplessDev';
  }


  componentWillUnmount() {
    document.title = 'SleeplessDev';
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {

    const params = new URLSearchParams(this.props.location.search);

    /* Handle external change to the "id" URL path */
    if (this.state.blogViewId && !nextProps.match.params.id) {

      this.setState({ blogViewId: null });

    }
    else if (!this.state.blogViewId && nextProps.match.params.id) {

      this.setState({ blogViewId: nextProps.match.params.id });

    }
    else if (this.state.blogViewId !== nextProps.match.params.id) {

      this.setState({ blogViewId: nextProps.match.params.id });

    }

    /* Handle external change to the "month" query parameter */
    if (this.state.month && !params.has('month')) {

      this.setState({ month: null });

    }
    else if (!this.state.month && params.has('month')) {

      this.setState({ month: params.get('month') });

    }
    else if (this.state.month !== params.get('month')) {

      this.setState({ month: params.get('month') });

    }

    /* Handle external change to the "year" query parameter */
    if (this.state.year && !params.has('year')) {

      this.setState({ year: null });

    }
    else if (!this.state.year && params.has('year')) {

      this.setState({ year: params.get('year') });

    }
    else if (this.state.year !== params.get('year')) {

      this.setState({ year: params.get('year') });

    }

    /* Handle external change to the "tag" query parameter */
    if (this.state.tag && !params.has('tag')) {

      this.setState({ tag: null });

    }
    else if (!this.state.tag && params.has('tag')) {

      this.setState({ tag: params.get('tag') });

    }
    else if (this.state.tag !== params.get('tag')) {

      this.setState({ tag: params.get('tag') });

    }

    /* Reset to defaults if URL is cleared */
    if (!nextProps.match.params.id && !params.has('month') && !params.has('year') && !params.has('tag')) {
      this.setState({
        blogViewId: null,
        month: null,
        year: null,
        tag: null,
        limit: ((params.has('limit') && params.get('limit')) || null)
      });
    }
  }


  componentDidCatch(error, errorInfo) {

    new Error(error.message);
    Blog.getDerivedStateFromError(error);

  }


  static getDerivedStateFromError(error) {

    return { hasError: true };

  }


  UNSAFE_componentWillMount() {
    const GET_TAGS = gql`
         query GetTags { allTags }
     `;

    this.setState({
      tagList: <Query query={GET_TAGS} fetchPolicy={'cache-and-network'} pollInterval={600000}>
        {
          ({ loading, error, data }) => {

            if (error) new Error(error);
            if (loading || !data) return null;
            else {

              const tagLinks = data.allTags.map(tag => ({
                label: tag,
                onClick: () => {
                  this.setTagParam(tag);
                }
              }));
              return <LinkListWidget fullWidth links={tagLinks} />;

            }
          }
        }
      </Query>
    });
  }


  setTagParam = tag => {
    this.props.history.push(`/blog?tag=${tag}`);
    this.setState({ tag });
  };

  setBlogId = id => {
    this.setState({ blogViewId: id });
  };

  setMonthAndYear = (year, month) => {

    month = month.toString();
    year = year.toString();
    this.props.history.push(`/blog?month=${month}&year=${year}`);
    this.setState({
      month,
      year
    });

  };


  toggleArchiveDrawer() {

    this.setState(state => ({ archiveDrawerOpen: !state.archiveDrawerOpen }));

  };


  render() {

    const {
      classes,
      width,
      theme
    } = this.props;

    const {
      hasError,
      tagList
    } = this.state;

    const { blogViewId, archiveDrawerOpen, ...rest } = this.state;

    const GET_ARCHIVE = gql`
                query GetArchive {
                    blogStats {
                        year, yearCount, months
                    }
                }
            `;

    /*
    TODO:
      1. Panel scrolls on the X-Axis
      2. Long category tags overflow outside of the containing list
      3. FAB arrows need to be shifted left (-X) a few pixels to center it more neatly
    */
    return (
      <div className={scss.blog}>
        <Fab
          tabIndex={0}
          color={'secondary'}
          autoFocus
          title={'Show Archive'}
          aria-label={'Show Archive'}
          onClick={this.toggleArchiveDrawer}
          className={classNames(theme.direction === 'rtl' ? scss['blog__fab--rtl'] : scss['blog__fab--ltr'])}
        >
          <FaAngleLeft size={30} />
        </Fab>
        <Grid
          container
          direction='row'
          spacing={0}
          justify='center'
          alignItems='center'
        >
          <Grid item className={classNames(scss.panel, classes.background)}>
            <div>
              {
                hasError
                ? <WarningSign label={'Oops! We ran into an unexpected problem >.<'} />
                : null
              }
            </div>
            <Grid container spacing={0} direction={isWidthDown('sm', width, true) ? 'column' : 'row'}>
              <Grid item md={10} sm={12}>
                {
                  !!blogViewId
                  ? <BlogView setTagParam={this.setTagParam} id={blogViewId} />
                  : <BlogOverview {...rest} setTagParam={this.setTagParam} setBlogId={this.setBlogId} />
                }
              </Grid>
              <Grid item md={2} sm={12}>
                {tagList}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction={'row'} alignItems={'flex-end'} justify={'flex-end'}>
          <Grid item>
            <Query query={GET_ARCHIVE} pollInterval={600000} fetchPolicy={'cache-and-network'}>
              {
                (({ error, loading, data }) => {

                  if (error) {
                    console.error(error);
                    return <TempDrawerWidget drawerOpen={this.state.archiveDrawerOpen} toggleDrawer={this.toggleArchiveDrawer} render={
                      <div>
                        <Typography variant={'subtitle1'} gutterBottom className={this.props.classes.noDataText}>
                          Unable to load archive
                        </Typography>
                        <Fab
                          autoFocus
                          title={'Hide Archive'}
                          color={'secondary'}
                          aria-label='Hide Archive'
                          onClick={this.toggleArchiveDrawer}
                          tabIndex={0}
                          className={theme.direction === 'rtl' ? scss['archive-drawer__fab--rtl'] : scss['archive-drawer__fab--ltr']}
                        >
                          <FaAngleRight size={30} />
                        </Fab>
                      </div>
                    } />;

                  }
                  else if (loading || !data) return null;
                  else {

                    // Set the default month and year to the last created blog post in the archive on first load
                    if (this.state.month === null && this.state.year === null && this.state.tag === null && this.state.blogViewId === null) {
                      let lastPost = data.blogStats[0];
                      this.setMonthAndYear(lastPost.year, lastPost.months[0]);
                    }

                    return <TempDrawerWidget drawerOpen={this.state.archiveDrawerOpen} toggleDrawer={this.toggleArchiveDrawer} render={
                      <ArchiveDrawer classes={this.props.classes} theme={this.props.theme} archiveNodes={data.blogStats} toggleDrawer={this.toggleArchiveDrawer} setMonthAndYear={this.setMonthAndYear} />} />;

                  }

                })
              }
            </Query>
          </Grid>
        </Grid>
      </div>
    );

  }

}


function ArchiveDrawer(props) {

  const { archiveNodes, classes, setMonthAndYear, toggleDrawer, theme } = props;

  const allStates = [];

  function changeAllStates(newValue) {
    allStates.map(state => state(newValue));
  }

  return (
    <div className={scss['archive-drawer']}>
      <List
        component={'nav'}
        subheader={
          <Grid container direction={'row'} alignItems={'center'} justify={'space-between'} spacing={16}>
            <Grid item>
              <Typography
                gutterBottom
                component={'div'}
                variant={'subtitle1'}
                className={theme.direction === 'rtl' ? classes.archiveTextRtl : classes.archiveText}
              >
                Archive
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant={'subtitle2'}
                gutterBottom
                component={'div'}
                className={theme.direction === 'rtl' ? classes.countTextRtl : classes.countText}
              >
                <small>Posts</small>
              </Typography>
            </Grid>
          </Grid>
        }
        className={classes.list}
      >
        <Divider variant={'fullWidth'} />
        {
          archiveNodes.map((node, index) => {

            const [ open, toggleOpen ] = useState(false);
            allStates.push(toggleOpen);

            return (
              <div key={node.year || index}>
                <ListItem button onClick={() => {

                  changeAllStates(false);
                  toggleOpen(!open);

                }}>
                  <Grid container direction={'row'} alignItems={'center'} justify={'space-between'} spacing={32}>
                    <Grid item>
                      <Typography variant={'h6'} gutterBottom>
                        {node.year}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container direction={'row'} alignContent={'center'} justify={'center'} spacing={16}>
                        <Grid item>
                          <Typography variant={'caption'} gutterBottom>
                            {node.yearCount}
                          </Typography>
                        </Grid>
                        <Grid item>
                          {!open ? <ExpandMore className={scss['expand-more-icon']} /> : <ExpandMore className={classNames(scss['expand-more-icon'], scss.rotate)} />}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
                <Collapse in={open} timeout={'auto'} unmountOnExit>
                  <List component={'div'} disablePadding className={classes.nestedList}>
                    {
                      node.months.map((month, index) => (
                        <ListItem button key={`${month}${index}`} className={classes.nestedListItem} onClick={() => {

                          toggleDrawer();
                          setMonthAndYear(node.year, month);

                        }}>
                          <ListItemText primary={getStringFromMonth(month, 'MMMM')} />
                        </ListItem>
                      ))
                    }
                  </List>
                </Collapse>
                <Divider variant={'fullWidth'} />
              </div>
            );

          })
        }
      </List>
      <Fab
        autoFocus
        title={'Hide Archive'}
        color={'secondary'}
        aria-label='Hide Archive'
        onClick={toggleDrawer}
        tabIndex={0}
        className={theme.direction === 'rtl' ? scss['archive-drawer__fab--rtl'] : scss['archive-drawer__fab--ltr']}
      >
        <FaAngleRight size={30} />
      </Fab>
    </div>
  );

}

ArchiveDrawer.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  setMonthAndYear: PropTypes.func.isRequired,
  archiveNodes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  theme: PropTypes.shape({}).isRequired
};


Blog.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired,
  theme: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
};


export default compose(withRouter, withWidth(), withStyles(themeStyles, { withTheme: true }))(Blog);