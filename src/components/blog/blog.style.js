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
/*  scrollingBody: {
    overflowY: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 100%'
  },*/

});

export default styles;
