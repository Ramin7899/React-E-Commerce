import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const config = {
    apiKey: "AIzaSyAtzzKpbE4qqwXZju0N6V7_70peU85o2Xc",
    authDomain: "e-commerce-ff308.firebaseapp.com",
    projectId: "e-commerce-ff308",
    storageBucket: "e-commerce-ff308.appspot.com",
    messagingSenderId: "675321743059",
    appId: "1:675321743059:web:f100e349405a92505bb626",
    measurementId: "G-D76C0G2FQN"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error mesage", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;