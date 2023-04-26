// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzHZRsxwWmKzP5dzgOfCnGXXolYVSPLpo",
    authDomain: "esp8266-demo-b9c26.firebaseapp.com",
    databaseURL: "https://esp8266-demo-b9c26-default-rtdb.firebaseio.com",
    projectId: "esp8266-demo-b9c26",
    storageBucket: "esp8266-demo-b9c26.appspot.com",
    messagingSenderId: "763998843896",
    appId: "1:763998843896:web:0d23a665661e61dcea9c0d"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database()

function D4() {
    const dbRef = database.ref();
    var status_D4;
    dbRef.child("D4").get().then((snapshot) => {
        if (snapshot.exists()) {
            status_D4 = snapshot.val();
            console.log(status_D4);
            if (status_D4) {
                database.ref('/').set({
                    D4: 0
                });
            } else {
                database.ref('/').set({
                    D4: 1
                });
            }
            // if (status_D4 = 0) {
            //     database.ref('/').set({
            //         D4: 1
            //     });
            // }
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    // alert('Saved');
}
