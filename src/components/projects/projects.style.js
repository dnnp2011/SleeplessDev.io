import mountainRange from '../../assets/images/stock/mountain-range-600x400.jpg';
import macbookcCoding from '../../assets/images/stock/macbook-coding-600x400.jpg';
import macbookcCoffee from '../../assets/images/stock/macbook-and-coffee-coding-600x400.jpg';
import victoriaSaucier from '../../assets/images/portrait/Victoria_Saucier_300x300.jpg';
import michaelSzczech from '../../assets/images/portrait/Michael_Szczech_300x300.jpg';


const styles = theme => {
  const lightGreen = '#7ed56f',
    mediumGreen = '#55c57a',
    darkGreen = '#28b485',
    lightBlue = '#6EC6FF',
    mediumBlue = '#2196F3',
    darkBlue = '#0069C0',
    lightOrange = '#ffb900',
    mediumOrange = '#ff7730',
    darkOrange = '#ff5722';

  return {
    background: {
      background: theme.palette.primary.main,
      backgroundImage: 'linear-gradient(to bottom right, rgba(115, 176, 115, 0.5), rgba(115, 176, 115, 1))',
      display: 'flex',
      flexDirection: 'row',
      margin: '1.2rem',
      zIndex: '2'
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
    breakoutBg: {
      backgroundImage: `linear-gradient(to bottom right, ${lightOrange}, ${mediumOrange}, ${darkOrange}), url(${mountainRange})`
    },
    poshcalcBg: {
      backgroundImage: `linear-gradient(to bottom right, ${lightGreen}, ${mediumGreen}, ${darkGreen}), url(${macbookcCoffee})`
    },
    zombiesBg: {
      backgroundImage: `linear-gradient(to bottom right, ${lightBlue}, ${mediumBlue}, ${darkBlue}), url(${macbookcCoding})`
    },
    victoriaBg: {
      backgroundImage: `url(${victoriaSaucier})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'local'
    },
    michaelBg: {
      backgroundImage: `url(${michaelSzczech})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'local'
    },
    floatLeft: {
      'float': 'left',
    },
    mxAuto: {
      margin: '2rem auto',
    },
    textCenter: {
      textAlign: 'center',
    },
    textLeft: {
      textAlign: 'left',
    }
  };

};

export default styles;
