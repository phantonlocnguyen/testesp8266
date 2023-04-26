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
var status_D4;

function getdata() {
    const dbRef = database.ref();
    dbRef.child("D4").get().then((snapshot) => {
        if (snapshot.exists()) {
            status_D4 = snapshot.val();
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    if (status_D4) {
        document.getElementById("status").innerHTML = "ON";
    } else {
        document.getElementById("status").innerHTML = "OFF";
    }
}
function D4() {
    if (status_D4) {
        database.ref('/').set({
            D4: 0
        });
        status_D4 = 0;
        document.getElementById("thongbao").innerHTML = "Đã tắt D4!";
        document.getElementById("status").innerHTML = "OFF";
    } else {
        database.ref('/').set({
            D4: 1
        });
        status_D4 = 1;
        document.getElementById("thongbao").innerHTML = "Đã bật D4!";
        document.getElementById("status").innerHTML = "ON";
    }
}

window.onload = function () {
    getdata();
}
