// Twoja konkretna data spotkania: 19 czerwca 2025, 20:00
const meetingDate = new Date(2025, 5, 19, 20, 0, 0); // miesiące liczymy od 0 (czyli 5 = czerwiec)

function updateCountdown() {
    // DEBUG: pokaż wartości w konsoli
    console.log("Aktualny czas:", new Date());
    console.log("Spotkanie:", meetingDate);
    console.log("Różnica (ms):", meetingDate - new Date());

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

    document.getElementById("minutesTotal").textContent = `${totalMinutes} minut`;
    document.getElementById("secondsTotal").textContent = `${totalSeconds} sekund`;
}

// Uruchom co sekundę
setInterval(updateCountdown, 1000);

// Pierwsze wywołanie natychmiast
updateCountdown();
