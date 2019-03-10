const styles = theme => ({
  background: {
    background: theme.palette.sidenavTheme,
    height: '100%',
  },
  headerTheme: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary
  },
  drawerFabRight: {
    margin: `${theme.spacing.unit}px`,
    position: 'absolute',
    zIndex: '5',
    right: '-0.2rem',
    top: '0',
    marginRight: '-1rem'
  },
  drawerFabLeft: {
    margin: `${theme.spacing.unit}px`,
    position: 'absolute',
    zIndex: '5',
    right: '-4rem',
    marginRight: '4rem',
    top: '0',
    transform: 'rotate(180deg)'
  },
  archiveText: {
    paddingLeft: '0.7rem'
  },
  countText: {
    paddingRight: '2.9rem'
  },
  archiveTextRtl: {
    paddingRight: '0.7rem',
    paddingLeft: '0.7rem'
  },
  countTextRtl: {
    paddingLeft: '2.9rem',
    paddingRight: '2.9rem'
  },
  closeDrawerButton: {
    position: 'fixed',
    bottom: '1rem',
    left: '1rem'
  },
  closeDrawerButtonRtl: {
    transform: 'rotate(180deg)',
    position: 'fixed',
    bottom: '1rem',
    left: '1rem'
  },
  noDataText: {
    marginTop: '5rem',
    marginLeft: '.4rem',
    marginRight: '.4rem',
    fontWeight: '400',
    fontSize: '1.6rem'
  },
  list: {
    width: '22rem',
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
    overflowY: 'auto',
    msOverflowY: 'auto',
    backgroundColor: theme.palette.background.paper
  },
  nestedList: {
    backgroundColor: `lighten(${theme.palette.background.paper}, -40%)`,
    filter: `lighten(${theme.palette.background.paper}, -50%)`
  },
  nestedListItem: {
    paddingLeft: theme.spacing.unit * 4
  },
  link: {
    padding: '0.4rem',
    margin: '0.2rem'
  }
});

export default styles;
