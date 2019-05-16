import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import AnnualPerformanceWidget from '../../widgets/annual-performance-widget/annual-performance-widget.component';
import DailyPerformanceWidget from '../../widgets/daily-performance-widget/daily-performance-widget.component';

import GdaxTickerWidget from '../../widgets/gdax-ticker-widget/gdax-ticker-widget.component';
import MarketCapWidget from '../../widgets/market-cap-widget/market-cap-widget.component';
import MostPopularWidget from '../../widgets/most-popular-widget/most-popular-widget.component';


import styles from './crypto.style';


class Crypto extends React.PureComponent {

  componentDidMount() {
    document.title = 'Crypto Market | SleeplessDev';
  }

  componentWillUnmount() {
    document.title = 'SleeplessDev';
  }

  render() {
    const { classes } = this.props;

    return (
      [
        <Grid key={1} item><Paper key={1} className={classes.portalWidgetContent}><GdaxTickerWidget /></Paper></Grid>,
        <div key={2} className={classes.portalDashboardPageWrapper}>

          <Grid item xs={12}>
            <Grid container justify='center' spacing={16}>

              <Grid key={1} item xs={12} sm={12} md={8} className={classes.portalWidget}>
                <Paper className={classes.portalWidgetContent}>
                  <DailyPerformanceWidget />
                </Paper>
              </Grid>

              <Grid key={2} item xs={12} sm={12} md={4} className={classes.portalWidget}>
                <AnnualPerformanceWidget />
              </Grid>

              <Grid key={3} item xs={12} sm={12} md={4} className={classes.portalWidget}>
                <MostPopularWidget />
              </Grid>

              <Grid key={4} item xs={12} sm={12} md={8} className={classes.portalWidget}>
                <MarketCapWidget />
              </Grid>

            </Grid>
          </Grid>
        </div>
      ]
    );
  }
}

Crypto.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(Crypto);
