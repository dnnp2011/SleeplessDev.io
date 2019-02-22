const styles = theme => ({

  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: theme.spacing.unit * 2,
  },
  content: {
    flex: '1 0 auto',
    marginBottom: '15px',
  },
  image: {
    width: '300px',
  },
  continueBtn: {
    margin: '3px',
    padding: '5px 8px 5px 8px',
  },
  tagGrid: {
    display: 'flex',
    wrap: 'auto',
    flex: '1 0 auto',
    flexFlow: 'row wrap',
  },

});

export default styles;