
import {AuthMethods, AuthProviders} from "angularfire2";


export const firebaseConfig = {
    // Paste all this from the Firebase console...
    apiKey: "AIzaSyC2sHbK9kGj-sWGXIpOTXGaNNaWElZMIzM",
    authDomain: "moviesnmusic-dd17f.firebaseapp.com",
    databaseURL: "https://moviesnmusic-dd17f.firebaseio.com",
    storageBucket: "moviesnmusic-dd17f.appspot.com",
    messagingSenderId: "1032697832644"
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
