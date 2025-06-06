const meetingDate = new Date(2025, 5, 27, 20, 0, 0); // 27 czerwca 2025, godz. 20:00

function updateCountdown() {
    const now = new Date();
    const diff = meetingDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "Spotkanie już trwa lub minęło!";
        document.getElementById("converted").innerHTML = "";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const totalMinutes = Math.floor(diff / (1000 * 60));
    const totalSeconds = Math.floor(diff / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    document.getElementById("totalMinutes").textContent = `Łącznie: ${totalMinutes} minut`;
    document.getElementById("totalSeconds").textContent = `Łącznie: ${totalSeconds} sekund`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
