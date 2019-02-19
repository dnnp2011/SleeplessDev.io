import React from 'react';
import Typography from '@material-ui/core/Typography';

const style = {
  width: '100%',
  maxWidth: 500
};

export default function Types() {
  return (
    <div style={style}>
      <Typography variant="h1" gutterBottom>
        h1
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5 => Headline
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6 => Title
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1 => Subheading
      </Typography>
      <Typography variant="body1" gutterBottom>
        Body 1
      </Typography>
      <Typography variant="body1" gutterBottom align="right">
        Body 1
      </Typography>
      <Typography variant="caption" gutterBottom align="center">
        Caption
      </Typography>
      <Typography gutterBottom noWrap>
        {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
      </Typography>
      <Typography variant="button" gutterBottom>
        Button
      </Typography>
    </div>
  );
}
