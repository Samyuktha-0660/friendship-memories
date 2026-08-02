// Open Surprise Button
document.getElementById("openBtn").addEventListener("click", showMessage);

// Memories Button
document.getElementById("memoryBtn").addEventListener("click", openMemory);

// Submit Button
document.getElementById("submitBtn").addEventListener("click", saveMsg);
function saveMsg(){

alert("Submit clicked");

}
function showMessage() {

    let name = document.getElementById("name").value.trim();
    let dob = document.getElementById("dob").value;

    if (name === "" || dob === "") {
        alert("Please enter your Name and DOB");
        return;
    }

    document.getElementById("form").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("title").innerHTML =
        "💖 Happy Friendship Day, " + name + " 💖";

    document.getElementById("msg").innerHTML =
        "Dear <b>" + name + "</b>,<br><br>" +
        "Thankyou for being my healer,my therapist n gem of my life!! Truly Blessed to have u in my life,My Dear TOM 🐣🔋💖 ❤️<br>" +
        "Youre my fav alwayss n forever🥹🐣❤️"<br>";
}

function openMemory() {

    document.getElementById("result").style.display = "none";
    document.getElementById("memory").style.display = "block";

    let old = localStorage.getItem("friendMsg");

    if (old) {
        document.getElementById("saved").innerHTML =
            "💌 Previous Message:<br><br><b>" + old + "</b>";
    }

}

function saveMsg(){

    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let message = document.getElementById("userMsg").value;

    console.log(name, dob, message);

    fetch("http://localhost:3000/save",{

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            name:name,
            dob:dob,
            message:message
        })

    })

    .then(res => res.text())

    .then(data => {

        console.log(data);
        alert("Message Saved");

    })

    .catch(err=>{
        console.log("Error:",err);
    });

}
