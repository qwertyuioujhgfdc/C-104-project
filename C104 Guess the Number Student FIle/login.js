function Login() {

    player_name = document.getElementById("playername").value;
    localStroage.setItem("player_name", player_name);

    window.location = "gamepage.html";
}
