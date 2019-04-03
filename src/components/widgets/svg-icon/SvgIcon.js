import PropTypes from 'prop-types';
import React from 'react';


const SvgIcon = props => {
  const {
    fillColor = false, fontColor = '#fff', size = '100%', gradientDirection = false, gradientStops = [
      '#7ed56f',
      '#55c57a',
      '#28b485'
    ], textStroke = null, backgroundStroke, svgClass, pathOptions, svgOptions, viewBoxSize, viewBoxOffset, ...rest
  } = props;

  const getGradientOffset = index => `${Math.ceil(index * (100 / (gradientStops.length - 1)))}%`;
  const renderGradient = () => {
    if (gradientDirection) {
      if (gradientDirection === 'horizontal') {
        return (
          <linearGradient id={'horizontal-gradient'}>
            {
              gradientStops.map((color, index) =>
                <stop key={index} offset={getGradientOffset(index)} stopColor={color} />)
            }
          </linearGradient>
        );
      }
      else {
        return (
          <linearGradient id={'vertical-gradient'} x2={'0'} y2={'1'}>
            {
              gradientStops.map((color, index) =>
                <stop key={index} offset={getGradientOffset(index)} stopColor={color} />)
            }
          </linearGradient>
        );
      }
    }
  };
  const setFillColor = () => fillColor
                             ? fillColor
                             : typeof gradientDirection === 'string'
                               ? `url(#${gradientDirection}-gradient)`
                               : gradientDirection === true
                                 ? `url(#$horizontal-gradient)`
                                 : '#777';
  const renderText = () => {
    if (textStroke) {
      if (typeof textStroke === 'string') {
        return <path fill={fontColor} d={textStroke} />;
      }
      else if (textStroke.length > 0) {
        return textStroke.map((stroke, index) => {
          return <path key={index} fill={fontColor} d={textStroke} />;
        });
      }
    }

    return void 0;
  };
  const renderBackground = () => {
    if (backgroundStroke) {
      if (typeof backgroundStroke === 'string') {
        if (backgroundStroke.startsWith('<')) {
          // If backgroundStroke is a full svg element, return the whole thing
          return backgroundStroke;
        }
        // If there's only one path provided, inject gradient
        return <path style={{ vectorEffect: 'non-scaling-stroke' }} fill={setFillColor()} d={backgroundStroke} />;
      }
      else if (backgroundStroke.length > 0) {
        // If there's an array of paths provided, iterate through them
        return backgroundStroke.map((stroke, index) => {
          if (stroke.startsWith('<')) {
            // If stroke is a full svg element, return the whole thing
            return stroke;
          }

          // If it's just the path description, inject the gradient
          return <path key={index} style={{ vectorEffect: 'non-scaling-stroke' }} fill={setFillColor()} d={stroke} />;
        });
      }
    }

    return new Error('SvgIcon expected a backgroundStroke, but got null');
  };

  let viewBox = viewBoxOffset ? viewBoxOffset.trim() + ' ' : '0 0 ';
  viewBox += viewBoxSize ? viewBoxSize.includes(' ') ? viewBoxSize.trim() : `${viewBoxSize.trim()} ${viewBoxSize.trim()}` : '128 128';
  console.log(viewBox);

  return (
    <div style={{
      width: size,
      height: size,
      display: 'block',
      flexGrow: '1',
      background: 'transparent',
      margin: 'auto',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      maxWidth: size
    }}>
      {
        svgOptions
        ? <svg
          xmlns={'http://www.w3.org/2000/svg'}
          className={svgClass}
          viewBox={viewBox}
          preserveAspectRatio={'xMidYMid'}
          aria-hidden={'true'}
          focusable={'false'}
          xmlSpace={'preserve'}
          height={svgOptions.height}
          width={svgOptions.width}
        >
          {renderGradient()}
          {renderBackground()}
          {renderText()}
        </svg>
        : <svg
          xmlns={'http://www.w3.org/2000/svg'}
          className={svgClass}
          viewBox={viewBoxSize ? viewBoxSize.includes(' ') ? `0 0 ${viewBoxSize}` : `0 0 ${viewBoxSize} ${viewBoxSize}` : '0 0 128 128'}
          preserveAspectRatio={'xMidYMid'}
          aria-hidden={'true'}
          focusable={'false'}
          xmlSpace={'preserve'}
        >
          {renderGradient()}
          {renderBackground()}
          {renderText()}
        </svg>
      }
    </div>
  );
};

SvgIcon.propTypes = {
  fillColor: PropTypes.string,
  fontColor: PropTypes.string,
  size: PropTypes.string,
  gradientDirection: PropTypes.oneOfType([ PropTypes.string, PropTypes.bool ]),
  gradientStops: PropTypes.arrayOf(PropTypes.string),
  textStroke: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string) ]),
  backgroundStroke: PropTypes.oneOfType([ PropTypes.string, PropTypes.arrayOf(PropTypes.string) ]).isRequired,
  svgClass: PropTypes.string

};

export default (SvgIcon);