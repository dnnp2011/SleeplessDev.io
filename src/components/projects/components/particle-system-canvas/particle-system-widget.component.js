import React from 'react';
import PropTypes from 'prop-types';
import scss from '../../projects.module.scss';


class ParticleSystemCanvas extends React.Component {
  // Remember to set up absolute position for the Canvas component with a Relative ancestor in CSS

  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }


  componentDidMount() {
    const { diameterRange = {
      min: 100,
      max: 150
    },
    xAxisOffset = 0,
    yAxisOffset = 0,
    xSpawnOffset = 0,
    ySpawnOffset = 0,
    particleCount = 50,
    sizeRange = {
      min: 5,
      max: 10
    },
    angularVelocity = 0.001,
    followMouse = false,
    mouseFollowSpeed = 0.05,
    fadeOverTime = false,
    fadeRate = 0.15,
    globalAlpha = null } = this.props;

    const position = {
      x: (window.innerWidth / 2) + xSpawnOffset,
      y: (window.innerHeight / 2) + ySpawnOffset
    };
    const canvas = this.canvasRef.current;
    const c = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Sets the center point of the particle system upon render
    const mouse = {
      x: (window.innerWidth / 2) + xSpawnOffset,
      y: (window.innerHeight / 2) + ySpawnOffset
    };
    let delayDone = false;
    resetDelay();

    const colors = [
      '#7ed56f',
      '#55c57a',
      '#28b485',
      '#009688',
      '#00bcd4',
      '#03a9f4',
      '#f7f7f7',
      '#ff9800',
      '#fff59d',
      '#fffde7'
    ];

    // Event Listeners
    this.mouseListener = window.addEventListener('mousemove', event => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });

    this.resizeListener = window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      resetDelay();

      init();
    });

    function resetDelay() {
      delayDone = false;
      setTimeout(() => {
        delayDone = true;
      }, 100);
    }

    // Objects
    function Particle(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.radians = Math.random() * Math.PI * 2;
      this.velocity = angularVelocity;

      // Use this value to make more circular orbit
      // this.orbit = randomIntFromRange(diameterRange.min, diameterRange.max);

      // Use this value to make an elliptical orbit with defined offsets
      this.orbit = {
        x:
          randomIntFromRange(diameterRange.min, diameterRange.max)
          + xAxisOffset,
        y:
          randomIntFromRange(diameterRange.min, diameterRange.max) + yAxisOffset
      };

      this.lastMouse = {
        x,
        y
      };

      this.draw = lastPoint => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineCap = 'round';
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x, this.y);
        c.stroke();
        c.closePath();
      };

      this.update = () => {
        // Store position from last frame
        const lastPoint = {
          x: this.x,
          y: this.y
        };
        // Oscillate the position over time
        this.radians += this.velocity;
        // Apply a movement drag effect
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * mouseFollowSpeed;
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * mouseFollowSpeed;

        this.x = (followMouse ? this.lastMouse.x : x) + (Math.cos(this.radians) * this.orbit.x);
        this.y = (followMouse ? this.lastMouse.y : y) + (Math.sin(this.radians) * this.orbit.y);

        // Implemented a setTimeout delay to allow time for the to get into orbit position before painting
        // Disabling this setting will cause an undesirable streaking on load
        if (!!delayDone) {
          this.draw(lastPoint);
        }
      };
    }

    // Implementation
    let particles;

    function init() {
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push(
          new Particle(
            position.x,
            position.y,
            randomIntFromRange(sizeRange.min, sizeRange.max),
            randomColor(colors)
          )
        );
      }
    }

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      if (globalAlpha) c.globalAlpha(globalAlpha);
      if (fadeOverTime) {
        // Settings for implementing the fade/drag effect
        // Can't be used on a non-uniform background as it requires applying a fill action on the canvas every frame
        c.fillStyle = `rgba(115, 176, 115, ${fadeRate})`;
        c.fillRect(0, 0, canvas.width, canvas.height);
      }
      else {
        c.clearRect(0, 0, canvas.width, canvas.height);
      }

      particles.forEach(particle => {
        particle.update();
      });
    }

    // Helper methods
    function randomIntFromRange(min, max) {
      return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    function randomColor(colors) {
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function distance(x1, y1, x2, y2) {
      const xDist = x2 - x1;
      const yDist = y2 - y1;

      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    init();
    animate();
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseListener);
    window.removeEventListener('resize', this.resizeListener);
  }


  render() {
    return (
      <div className={scss['canvas-container']}>
        <canvas
          ref={this.canvasRef}
          className={scss['canvas']}
          color={'inherit'}
          width={'100%'}
          height={'100%'}
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}


ParticleSystemCanvas.propTypes = {
  diameterRange: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }),
  xAxisOffset: PropTypes.number,
  yAxisOffset: PropTypes.number,
  xSpawnOffset: PropTypes.number,
  ySpawnOffset: PropTypes.number,
  particleCount: PropTypes.number,
  sizeRange: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }),
  angularVelocity: PropTypes.number,
  followMouse: PropTypes.bool,
  mouseFollowSpeed: PropTypes.number,
  fadeOverTime: PropTypes.bool,
  fadeRate: PropTypes.number,
  globalAlpha: PropTypes.number
};

export default ParticleSystemCanvas;


/*
import animate from '@material-ui/core/es/internal/animate';
import React from 'react';
import PropTypes from 'prop-types';
import scss from '../../projects.module.scss';


class ParticleSystemCanvas extends React.Component {
  // Remember to set up absolute position for the Canvas component with a Relative ancestor in CSS

  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();

    this.state = {
      diameterRange: {
        min: 100,
        max: 150
      },
      xAxisOffset: 0,
      yAxisOffset: 0,
      xSpawnOffset: 0,
      ySpawnOffset: 0,
      particleCount: 50,
      sizeRange: {
        min: 5,
        max: 10
      },
      angularVelocity: 0.001,
      followMouse: false,
      mouseFollowSpeed: 0.05,
      fadeOverTime: false,
      fadeRate: 0.15,
      globalAlpha: null,
      delayDone: false,
      ...props
    };

    this.position = {
      x: (window.innerWidth / 2) + this.state.xSpawnOffset,
      y: (window.innerHeight / 2) + this.state.xSpawnOffset
    };

    this.canvas = {};
    this.c = null;

    this.mouse = {
      x: (window.innerWidth / 2) + this.state.xSpawnOffset,
      y: (window.innerHeight / 2) + this.state.ySpawnOffset
    };

    this.colors = [
      '#7ed56f',
      '#55c57a',
      '#28b485',
      '#009688',
      '#00bcd4',
      '#03a9f4',
      '#f7f7f7',
      '#ff9800',
      '#fff59d',
      '#fffde7'
    ];

    this.particles = null;
  }


  // Objects
  Particle(x, y, radius, color, state, scope) {
    const {
      diameterRange,
      xAxisOffset,
      yAxisOffset,
      xSpawnOffset,
      ySpawnOffset,
      particleCount,
      sizeRange,
      angularVelocity,
      followMouse,
      mouseFollowSpeed,
      fadeOverTime,
      fadeRate,
      globalAlpha,
      delayDone
    } = state;

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = angularVelocity;

    // Use this value to make more circular orbit
    // this.orbit = randomIntFromRange(diameterRange.min, diameterRange.max);

    // Use this value to make an elliptical orbit with defined offsets
    this.orbit = {
      x:
        scope.randomIntFromRange(diameterRange.min, diameterRange.max)
        + xAxisOffset,
      y:
        scope.randomIntFromRange(diameterRange.min, diameterRange.max) + yAxisOffset
    };

    this.lastMouse = {
      x,
      y
    };

    this.draw = lastPoint => {
      scope.c.beginPath();
      scope.c.strokeStyle = this.color;
      scope.c.lineCap = 'round';
      scope.c.lineWidth = this.radius;
      scope.c.moveTo(lastPoint.x, lastPoint.y);
      scope.c.lineTo(this.x, this.y);
      scope.c.stroke();
      scope.c.closePath();
    };

    this.update = () => {
      // Store position from last frame
      const lastPoint = {
        x: this.x,
        y: this.y
      };

      // Oscillate the position over time
      this.radians += this.velocity;
      // Apply a movement drag effect
      this.lastMouse.x += (scope.mouse.x - this.lastMouse.x) * mouseFollowSpeed;
      this.lastMouse.y += (scope.mouse.y - this.lastMouse.y) * mouseFollowSpeed;

      this.x = (followMouse ? this.lastMouse.x : x) + (Math.cos(this.radians) * this.orbit.x);
      this.y = (followMouse ? this.lastMouse.y : y) + (Math.sin(this.radians) * this.orbit.y);

      // Implemented a setTimeout delay to allow time for the to get into orbit position before painting
      // Disabling this setting will cause an undesirable streaking on load
      if (!!delayDone) {
        this.draw(lastPoint);
      }
    };
  }


  // Helper methods
  randomIntFromRange(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }


  randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }


  distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
  }


  // UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
  //   if (nextProps !== this.props || nextState !== this.state) {
  //     this.setState({ delayDone: false });
  //     setTimeout(() => {
  //       this.setState({ delayDone: true });
  //     }, 100);
  //   }
  // }
  init() {
      this.particles = [];

      for (let i = 0; i < this.state.particleCount; i++) {
        this.particles.push(
          new this.Particle(
            this.position.x,
            this.position.y,
            this.randomIntFromRange(this.state.sizeRange.min, this.state.sizeRange.max),
            this.randomColor(this.colors),
            this.state,
            this
          )
        );
      }
    }


  componentDidMount() {
    const {
      diameterRange,
      xAxisOffset,
      yAxisOffset,
      xSpawnOffset,
      ySpawnOffset,
      particleCount,
      sizeRange,
      angularVelocity,
      followMouse,
      mouseFollowSpeed,
      fadeOverTime,
      fadeRate,
      globalAlpha,
      delayDone
    } = this.state;
    const { ...rest } = this.props;
    this.setState({ ...rest });


  // Animation Loop
  function animate(scope) {
    requestAnimationFrame(animate);

    // if (this.state.globalAlpha) this.c.globalAlpha(this.state.globalAlpha);
    // if (this.state.fadeOverTime) {
    //   // Settings for implementing the fade/drag effect
    //   // Can't be used on a non-uniform background as it requires applying a fill action on the canvas every frame
    //   this.c.fillStyle = `rgba(115, 176, 115, ${this.state.fadeRate})`;
    //   this.c.fillRect(0, 0, this.canvas.width, this.canvas.height);
    // }
    // else {
    // }
    scope.c.clearRect(0, 0, scope.canvas.width, scope.canvas.height);

    scope.particles.forEach(particle => {
      particle.update();
    });
  };

    this.canvas = this.canvasRef.current;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.c = this.canvas.getContext('2d');

    // Event Listeners
    this.mouseListener = window.addEventListener('mousemove', event => {
      this.mouse.x = event.clientX;
      this.mouse.y = event.clientY;
    });

    this.resizeListener = window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      this.init();
    });


    this.init();
    animate(this);
  }


  componentWillUnmount() {
    window.removeEventListener('mousemove', this.mouseListener);
    window.removeEventListener('resize', this.resizeListener);
  }


  render() {
    return (
      <div className={scss['canvas-container']}>
        <canvas
          ref={this.canvasRef}
          className={scss['canvas']}
          color={'inherit'}
          width={'100%'}
          height={'100%'}
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}


ParticleSystemCanvas.propTypes = {
  diameterRange: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }),
  xAxisOffset: PropTypes.number,
  yAxisOffset: PropTypes.number,
  xSpawnOffset: PropTypes.number,
  ySpawnOffset: PropTypes.number,
  particleCount: PropTypes.number,
  sizeRange: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }),
  angularVelocity: PropTypes.number,
  followMouse: PropTypes.bool,
  mouseFollowSpeed: PropTypes.number,
  fadeOverTime: PropTypes.bool,
  fadeRate: PropTypes.number,
  globalAlpha: PropTypes.number
};

export default ParticleSystemCanvas;*/
