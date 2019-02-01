const styles = theme => ({
  background: {
    background: theme.palette.secondary.main,
    width: '100%',
    height: '100%',
  },
  'primary-card': {
    background: theme.palette.primary.light,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.typography.secondary,
  },
});

export default styles;
