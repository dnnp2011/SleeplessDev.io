import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './config';

if (!config) {
  config = {
    // Enter firebase info here

  }
}

if (!firebase.apps.length)
  firebase.initializeApp(config);

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
