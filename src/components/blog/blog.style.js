const styles = theme => ({
  background: {
    background: theme.palette.sidenavTheme,
    width: '100%',
    height: '100%',
  },
  'primary-card': {
    background: theme.palette.contentTheme,
  },
  headerTheme: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary
  },
  drawerFab: {
    margin: theme.spacing.unit,
    // border: 'solid 3px '+theme.palette.primary.main,
  },
  list: {
    width: '250px',
    marginTop: '30px',
    marginBottom: '30px',
    overflowY: 'auto',
    msOverflowY: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  nestedList: {
    backgroundColor: `lighten(${theme.palette.background.paper}, -40%)`,
    filter: `lighten(${theme.palette.background.paper}, -50%)`,
  },
  nestedListItem: {
    width: '100%',
    paddingLeft: theme.spacing.unit * 4,
  },
  link: {
    padding: '5px',
    margin: '2px',
  }

});

export default styles;
