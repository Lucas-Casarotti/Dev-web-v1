function updateRelogio(){
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');

    var timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("relogio").innerText = timeString;
}


updateRelogio();

setInterval(updateRelogio, 1000);