function showUsers() {
    var client = new XMLHttpRequest();
    client.overrideMimeType("application/json");
    client.open('GET', 'https://reqres.in/api/users?page=2', false);
    if (document.getElementById("alert")) {
        document.getElementById("alert").remove();
    } else if (document.getElementById("users")) {
        document.getElementById("users").remove();
    }
    try {
        client.send()
        var data = JSON.parse(client.responseText)["data"];
        var users = document.createElement("div");
        users.id = "users";
        for (i = 0; i < data.length; i++) {
            var user = document.createElement("div");
            var userInfo = document.createElement("div");
            console.log(data[i]["email"]);
            user.append("User " + (i + 1));
            if (i == 0) {
                user.className = "user_tab active_user";
            } else {
                user.className = "user_tab"
            }
            user.id = "user";
            user.setAttribute("onclick", "active(this)");
            var userAvatar = document.createElement("img");
            var userFirstName = document.createElement("p");
            var userSecondName = document.createElement("p");
            userAvatar.src=data[i]["avatar"];
            userFirstName.innerHTML = "First Name: " + data[i]["first_name"];
            userSecondName.innerHTML = "Last Name: " + data[i]["last_name"];
            userInfo.appendChild(userAvatar);
            userInfo.appendChild(userFirstName);
            userInfo.appendChild(userSecondName);
            if (i == 0) {
                userInfo.className = "active_info";
            } else {
                userInfo.className = "info";
            }
            user.appendChild(userInfo);
            users.appendChild(user);
        }
        document.body.appendChild(users);
    } catch {
        var alertdiv = document.createElement("div");
        alertdiv.innerHTML = "Error during loading";
        alertdiv.id = "alert";
        alertdiv.className = "error";
        document.body.appendChild(alertdiv);
    }
}

function active(el) {
    var allUsers = document.getElementsByClassName("user_tab")
    for (i = 0; i < allUsers.length; i++) {
        // console.log(allUsers[i].children)
        if (allUsers[i].classList.contains("active_user")) {
            allUsers[i].classList.remove("active_user")
            allUsers[i].children[0].classList.remove("active_info");
            allUsers[i].children[0].className += "info";
        }
    }
   
    el.className += " active_user";
    for (y = 0; y < el.children.length; y++) {
        el.children[0].classList.remove("info");
        el.children[0].className += "active_info";
    }
    
}
