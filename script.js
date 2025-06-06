function updateCountdown() {
    const now = new Date();
    const diff = meetingDate - now;

    console.log("Teraz:", now);
    console.log("Spotkanie:", meetingDate);
    console.log("Różnica (ms):", diff);

    if(diff <= 0) {
        document.getElementById("countdown").innerHTML = "Spotkanie już trwa lub minęło!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    console.log(days, hours, minutes, seconds);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}
