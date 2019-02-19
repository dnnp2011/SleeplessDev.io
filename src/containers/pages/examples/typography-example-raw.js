/*eslint no-useless-escape: 0*/
export default `
import React from 'react';
import Typography from '@material-ui/core/Typography';

const style = {
  width: '100%',
  maxWidth: 580
};

export default function Types() {
  return (
    <div style={style}>
      <Typography variant='h1' gutterBottom noWrap='{true}'>
        display4 => h1
      </Typography>
      <Typography variant='h2' gutterBottom>
        display3 => h2
      </Typography>
      <Typography variant='h3' gutterBottom>
        display2 => h3
      </Typography>
      <Typography variant='h4' gutterBottom>
        display1 => h4
      </Typography>
      <Typography variant='h5' gutterBottom>
        headline => h5
      </Typography>
      <Typography variant='h6' gutterBottom>
        title => h6
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        subheading => subtitle1
      </Typography>
      <Typography variant='subtitle2' gutterBottom>
        subtitle2
      </Typography>
      <Typography variant='body1' gutterBottom>
        body1
      </Typography>
      <Typography variant='body2' gutterBottom>
        body2
      </Typography>
      <Typography variant='caption' gutterBottom align='center'>
        caption
      </Typography>
      <Typography gutterBottom noWrap>
        {\`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        \`}
      </Typography>
      <Typography variant='button' gutterBottom>
        Button
      </Typography>
    </div>
  );
}

`;
