import { fs } from './firebase';


// User API

/**
 * Creates a new user document entry in Firestore/users collection
 * param-> uid: The User's unique identifier assigned upon Firebase auth registration. See firebase/auth for more info.
 * param-> email: The User's email address entered upon registration.
 * param-> firstName: The User's first name entered upon registration. Empty if none given.
 * param-> lastName: The User's last name entered upon registration. Empty if none given.
 * return-> The user document if found, else the error string
 * */
export const doCreateUser = (uid, email, firstName = '', lastName = '') =>
  fs.collection('users').doc(uid).set({
                                        uid,
                                        email,
                                        firstName,
                                        lastName
                                      });

export const doCreateCustomData = (fields, values, uid) => {
  fields.map((field, element) => {
    fs.collection('users').doc(uid).set({
                                          [field]: values[element]
                                        }, { merge: true });
  });
};


/**
 * Returns a single user document based upon the authuser's UID (User ID)
 * param-> uid: The User's unique identifier assigned upon Firebase auth registration. See firebase/auth for more info.
 * return-> The user document if found, else the error string
 * */
export const doGetUser = uid =>
  fs.collection('users').doc(uid).get();

//  .then(doc => {
//   if(!doc.exists) {
//     console.log(`Error: document does not exist => fs.doGetUser(${uid})`);
//   } else {
//     return doc;
//   }
// }).catch(error => {
//   // Return error info if caught
//   return error;
// });


export const doGetAllUsers = () => {

};

// Launch ICO functions
export const doGetICOdata = name =>
  fs.collection('icos').doc(name).get();

export const doGetAllIcos = () =>
  fs.collection('icos').get();

export const doSetIcoData = (name, start, end, founderName, companyName, countryOfOrigin, phase, price) => {
  fs.collection('icos').doc(name).set({
                                        name,
                                        start,
                                        end,
                                        founderName,
                                        companyName,
                                        countryOfOrigin,
                                        phase,
                                        price,
                                      });
};
