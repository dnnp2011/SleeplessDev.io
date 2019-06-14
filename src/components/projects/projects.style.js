/* Project Screenshots */
import ares2 from '../../assets/images/screenshots/ares-2.png';
import blackjack2 from '../../assets/images/screenshots/blackjack-2.png';
import breakout2 from '../../assets/images/screenshots/breakout-2.png';
import cargoContainer1 from '../../assets/images/screenshots/cargo-container-1.jpg';
import cargoContainer2 from '../../assets/images/screenshots/cargo-container-2.jpg';
import cargoContainer3 from '../../assets/images/screenshots/cargo-container-rendered-1.jpg';
import cargoContainer4 from '../../assets/images/screenshots/cargo-container-rendered-2.jpg';
import coolcalc3 from '../../assets/images/screenshots/coolcalc-3.jpg';
import creek1 from '../../assets/images/screenshots/creek-1.jpg';
import earthSpace1 from '../../assets/images/screenshots/earth-space-1.jpg';
import gainfy2 from '../../assets/images/screenshots/gainfy-2.png';
import gunOptic1 from '../../assets/images/screenshots/gun-optic-1.jpg';
import herome1 from '../../assets/images/screenshots/herome-1.png';
import poshcalc4 from '../../assets/images/screenshots/poshcalc-4.png';
import rockDodger1 from '../../assets/images/screenshots/rock-dodger-1.png';
import sleeplessdev1 from '../../assets/images/screenshots/sleeplessdev-1.jpg';
import sleeplessdevBackend1 from '../../assets/images/screenshots/sleeplessdev-back-1.png';
import sleeplessRadio1 from '../../assets/images/screenshots/sleeplessradio-1.png';
import spaceInvaders3 from '../../assets/images/screenshots/space-invaders-3.png';
import spaceShooter1 from '../../assets/images/screenshots/space-shooter-1.jpg';
import spaceship2 from '../../assets/images/screenshots/spaceship-2.jpg';
import steelDrum1 from '../../assets/images/screenshots/steel-drum-1.jpg';
import survivalShooter6 from '../../assets/images/screenshots/survival-shooter-6.jpg';
import tacticalGrip1 from '../../assets/images/screenshots/tactical-grip-1.jpg';
import tanks3 from '../../assets/images/screenshots/tanks-3.jpg';
import tictactoe1 from '../../assets/images/screenshots/tictactoe-1.png';
import zombieShooter2 from '../../assets/images/screenshots/zombie-shooter-2.jpg';


const styles = theme => {
  const lightGreen = '#7ed56f',
    mediumGreen = '#55c57a',
    darkGreen = '#28b485',
    lightBlue = '#6EC6FF',
    mediumBlue = '#2196F3',
    darkBlue = '#0069C0',
    lightOrange = '#ffb900',
    mediumOrange = '#ff7730',
    darkOrange = '#ff5722',
    orangeGradient = `${lightOrange}, ${mediumOrange}, ${darkOrange}`,
    greenGradient = `${lightGreen}, ${mediumGreen}, ${darkGreen}`,
    blueGradient = `${lightBlue}, ${mediumBlue}, ${darkBlue}`;

  const skewDeg = -12;

  return {
    background: {
      background: theme.palette.primary.main,
      backgroundImage: 'linear-gradient(to bottom right, rgba(115, 176, 115, 0.5), rgba(115, 176, 115, 1))',
      display: 'flex',
      flexDirection: 'row',
      margin: '1.2rem'
    },
    'primary-card': { background: theme.palette.primary.light },
    orange: {},
    green: {},
    blue: {},
    'skills--orange': {
      borderBottom: `1px solid ${lightOrange}`
    },
    'skills--green': {
      borderBottom: `1px solid ${lightGreen}`
    },
    'skills--blue': {
      borderBottom: `1px solid ${lightBlue}`
    },

    CargoContainer1: {
      backgroundImage: `url(${cargoContainer1})`
    },
    CargoContainer2: {
      backgroundImage: `url(${cargoContainer2})`
    },
    CargoContainer3: {
      backgroundImage: `url(${cargoContainer3})`
    },

    /* Software */
    GainfyBg: {
      backgroundImage: `linear-gradient(to bottom right, ${orangeGradient}), url(${gainfy2})` //TODO: Crop a close up of 2fa or coin purchasing
    },
    AresBg: {
      backgroundImage: `linear-gradient(to bottom right, ${greenGradient}), url(${ares2})` //TODO: Crop a close up of graphs or blockchain ticker
    },
    SleeplessDevBg: {
      backgroundImage: `linear-gradient(to bottom right, ${blueGradient}), url(${sleeplessdev1})`
    },
    SleeplessDevBackendBg: {
      backgroundImage: `linear-gradient(to bottom right, ${orangeGradient}), url(${sleeplessdevBackend1})`
    },
    SleeplessRadioBg: {
      backgroundImage: `linear-gradient(to bottom right, ${blueGradient}), url(${sleeplessRadio1})`
    },
    ZombieShooterBg: {
      backgroundImage: `linear-gradient(to bottom right, ${blueGradient}), url(${zombieShooter2})` //TODO: Crop out stat menus
    },
    SpaceInvaderBg: {
      backgroundImage: `linear-gradient(to bottom right, ${orangeGradient}), url(${spaceInvaders3})`
    },
    PoshCalcBg: {
      backgroundImage: `linear-gradient(to bottom right, ${greenGradient}), url(${poshcalc4})`
    },
    CoolCalcBg: {
      backgroundImage: `linear-gradient(to bottom right, ${greenGradient}), url(${coolcalc3})`
    },
    BreakoutBg: {
      backgroundImage: `linear-gradient(to bottom right, ${blueGradient}), url(${breakout2})`
    },
    RockDodgerBg: {
      backgroundImage: `linear-gradient(to bottom right, ${orangeGradient}), url(${rockDodger1})`
    },
    BlackjackBg: {
      backgroundImage: `linear-gradient(to bottom right, ${greenGradient}), url(${blackjack2})`
    },
    TicTacToeBg: {
      backgroundImage: `linear-gradient(to bottom right, ${blueGradient}), url(${tictactoe1})`
    },
    SurvivalShooterBg: {
      backgroundImage: `linear-gradient(to bottom right, ${orangeGradient}), url(${survivalShooter6})`
    },
    SpaceShooterBg: {
      backgroundImage: `linear-gradient(to bottom right, ${blueGradient}), url(${spaceShooter1})`
    },
    TanksBg: {
      backgroundImage: `linear-gradient(to bottom right, ${greenGradient}), url(${tanks3})`
    },
    HeroMeBg: {
      backgroundImage: `linear-gradient(to bottom right, ${orangeGradient}), url(${herome1})`
    },

    /* Art and Design */
    CreekBg: {
      backgroundImage: `linear-gradient(to bottom right, ${greenGradient}), url(${creek1})`
    },
    SpaceBg: {
      backgroundImage: `linear-gradient(to bottom right, ${blueGradient}), url(${earthSpace1})`
    },
    SpaceShipBg: {
      backgroundImage: `linear-gradient(to bottom right, ${orangeGradient}), url(${spaceship2})`
    },
    CargoContainerBg: {
      backgroundImage: `linear-gradient(to bottom right, ${greenGradient}), url(${cargoContainer4})`
    },
    SteelDrumBg: {
      backgroundImage: `linear-gradient(to bottom right, ${blueGradient}), url(${steelDrum1})`
    },
    TacticalGripBg: {
      backgroundImage: `linear-gradient(to bottom right, ${orangeGradient}), url(${tacticalGrip1})`
    },
    RedDotOpticBg: {
      backgroundImage: `linear-gradient(to bottom right, ${greenGradient}), url(${gunOptic1})`
    }

    // Bg: {
    //   backgroundImage: `linear-gradient(to bottom right, ${Gradient}), url(${''})`,
    // },
  };
};

export default styles;
