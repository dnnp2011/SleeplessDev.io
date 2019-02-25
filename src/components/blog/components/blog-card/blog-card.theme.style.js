const styles = theme => ({

  details: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    padding: theme.spacing.unit * 2,
  },
  content: {
    flex: '1 0 auto',
    marginBottom: '15px',
    wrap: 'auto',
  },
  image: {
    width: '11rem',
    display: 'inline-block',
    float: "start",
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