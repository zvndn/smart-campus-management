function login(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        window.location.href = "dashboardadmin.html";
        alert("Login admin correct");
    } else if (username === "eleve" && password === "1234"){
        window.location.href = "dashboard.html";
        alert("Login eleve correct");
    }
    else {
        alert("Login incorrect");
    }
}