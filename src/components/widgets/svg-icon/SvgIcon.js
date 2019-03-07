import PropTypes from 'prop-types';
import React from 'react';


const SvgIcon = props => {
  const { fillColor = false, fontColor = '#fff', size = '100%', gradientDirection = false, gradientStops = [
    '#7ed56f',
    '#55c57a',
    '#28b485'
  ], textStroke = null, backgroundStroke, svgClass, svgOptions, ...rest } = props;

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
        return <path fill={fontColor} d={textStroke} {...svgOptions} />;
      }
      else if (textStroke.length > 0) {
        return textStroke.map((stroke, index) => {
          return <path key={index} {...svgOptions} fill={fontColor} d={textStroke} />;
        });
      }
    }

    return void 0;
  };
  const renderBackground = () => {
    if (backgroundStroke) {
      if (typeof backgroundStroke === 'string') {
        return <path {...svgOptions} style={{ vectorEffect: 'non-scaling-stroke' }} fill={setFillColor()} d={backgroundStroke} />;
      }
      else if (backgroundStroke.length > 0) {
        return backgroundStroke.map((stroke, index) => <path key={index} style={{ vectorEffect: 'non-scaling-stroke' }} fill={setFillColor()} d={stroke} />);
      }
    }

    return new Error('SvgIcon expected a backgroundStroke, but got null');
  };


  return (
    <div {...rest} style={{
      width: size,
      height: size,
      display: 'block',
      flexGrow: '1',
      background: 'transparent',
      margin: 'auto',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      maxWidth: size,
    }}>
      <svg xmlns={'http://www.w3.org/2000/svg'} className={svgClass} viewBox='0 0 128 128' preserveAspectRatio={'xMidYMin meet'} aria-hidden={'true'} focusable={'false'}>
        {renderGradient()}
        {renderBackground()}
        {renderText()}
      </svg>
    </div>
  );
};

SvgIcon.propTypes = {
  fillColor: PropTypes.string,
  fontColor: PropTypes.string,
  size: PropTypes.string,
  gradientDirection: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  gradientStops: PropTypes.arrayOf(PropTypes.string),
  textStroke: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  backgroundStroke: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};

export default (SvgIcon);