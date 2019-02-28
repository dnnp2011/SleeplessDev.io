const styles = theme => ({
  background: {
    background: '#6c6c6c',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  'primary-card': {
    background: theme.palette.primary.light,
  },
  appBar: {
    backgroundColor: 'transparent'
  },
  navButton: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontWeight: '600',
    fontSize: '19',
    '&hover': {
      color: theme.palette.text.primary.light,
    }
  },
  content: {

  },
  footer: {

  },
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    justify: 'center',
    backgroundColor: '#000000'
  },
  column: {
    display: 'inline-block',
    height: '100vh',
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

export default styles;
