// Digital Clock Program

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Add a leading zero if the value is less than 10
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    const timeString = hours + ":" + minutes + ":" + seconds;

    // Display the time on the webpage
    document.getElementById("clock").textContent = timeString;
}

// Call the function once to display the clock immediately
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);
