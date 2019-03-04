const styles = theme => ({
  background: {
    background: theme.palette.sidenavTheme,
    height: '100%'
  },
  headerTheme: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary
  },
  drawerFabRight: {
    margin: `${theme.spacing.unit}px`,
    position: 'absolute',
    zIndex: '5',
    right: '-2px',
    top: '0',
    marginRight: '-10px'
  },
  drawerFabLeft: {
    margin: `${theme.spacing.unit}px`,
    position: 'absolute',
    zIndex: '5',
    right: '0',
    top: '0',
    marginRight: '-10px',
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
    bottom: '10px',
    left: '10px'
  },
  closeDrawerButtonRtl: {
    transform: 'rotate(180deg)',
    position: 'fixed',
    bottom: '10px',
    left: '10px'
  },
  noDataText: {
    marginTop: '50px',
    marginLeft: '4px',
    marginRight: '4px',
    fontWeight: '400',
    fontSize: '20pt'
  },
  list: {
    width: '250px',
    marginTop: '30px',
    marginBottom: '30px',
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
    padding: '5px',
    margin: '2px'
  }
});

export default styles;
