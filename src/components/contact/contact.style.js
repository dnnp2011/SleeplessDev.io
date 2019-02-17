function shadeColor(color, percent) {

  const f = parseInt(color.slice(1), 16);
  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;
  const R = f >> 16;
  const G = (f >> 8) & 0x00FF;
  const B = f & 0x0000FF;
  return '#'+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1); // eslint-disable-line
}

function brightenOnHover(col, amt){
  let usePound = false;

  if (col[0] === "#") {
    col = col.slice(1);
    usePound = true;
  }

  let num = parseInt(col,16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  let g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

const styles = theme => ({
  ContactDetailsHeader: {
    background: shadeColor(theme.palette.secondary.main, 0.22),
    '&:before': {
      background: shadeColor(theme.palette.secondary.main, 0.12)
    },
    '&:after': {
      background: theme.palette.secondary.main
    }
  },
  ContactDetailsAvatarImg: {
    borderColor: theme.palette.background.default,
  },
  ContactDetailsSocialIcons: {
    // color: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
  },
  ContactDetailsContentEmail: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: brightenOnHover(theme.palette.secondary.main, -50)
    }
  }
});

export default styles;
