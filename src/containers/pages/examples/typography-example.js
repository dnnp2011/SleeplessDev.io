import React from 'react';
import Typography from '@material-ui/core/Typography';

const style = {
  width: '100%',
  maxWidth: 500
};

export default function Types() {
  return (
    <div style={style}>
      <Typography variant="display4" gutterBottom>
        Display 4
      </Typography>
      <Typography variant="display3" gutterBottom>
        Display 3
      </Typography>
      <Typography variant="display2" gutterBottom>
        Display 2
      </Typography>
      <Typography variant="display1" gutterBottom>
        Display 1
      </Typography>
      <Typography variant="h5" gutterBottom>
        Headline
      </Typography>
      <Typography variant="h6" gutterBottom>
        Title
      </Typography>
      <Typography variant="subheading" gutterBottom>
        Subheading
      </Typography>
      <Typography variant="body2" gutterBottom>
        Body 2
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
