import { db } from './firebase';

// User API

// Creates the user at the given unique id path, and sets its values
export const doCreateUser = (id, username, email, flag) =>
  db.ref(`users/${id}`).set({
                              username,
                              email,
                              flag,
                            });

// Retrieves all the users from the path
export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other Entity APIs ...
