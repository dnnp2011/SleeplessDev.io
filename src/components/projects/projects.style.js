const styles = theme => {

  return {
    'background': {
      background: theme.palette.primary.main,
      backgroundImage: 'linear-gradient(to bottom right, rgba(115, 176, 115, 0.5), rgba(115, 176, 115, 1))',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      margin: '2rem',
      zIndex: '2',
    },
    'primary-card': { background: theme.palette.primary.light },
    'navButton': {
      'textDecoration': 'none',
      'color': theme.palette.text.primary,
      'fontWeight': '600',
      'fontSize': '19',
      '&hover': { color: theme.palette.text.primary.light }
    },
    'content': {},
    'footer': {},
    'root': {
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      justify: 'center',
      backgroundColor: '#ffffff',
    },
    'column': {
      display: 'inline-block',
      height: '100vh',
      width: '100%',
    },
    'grow': { flexGrow: 1 },
    'menuButton': {
      marginLeft: -12,
      marginRight: 20,
    },
  };

};

export default styles;
