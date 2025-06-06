// 🔧 TUTAJ ustaw datę i godzinę spotkania
const meetingDate = new Date("2025-06-27T20:00:00"); // YYYY-MM-DD T HH:MM:SS

function updateCountdown() {
    const now = new Date();
    const timeDiff = meetingDate - now;

    if (timeDiff <= 0) {
        document.getElementById("countdown").innerHTML = "Już się spotkaliśmy! 🥰";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    document.getElementById("countdown").innerHTML =
        `${days} dni, ${hours} godz., ${minutes} min., ${seconds} sek.`;
}

// Aktualizuj co sekundę
setInterval(updateCountdown, 1000);
updateCountdown();
