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
const startDate = new Date(2024, 11, 30); // 30 grudnia 2024

function updateTogetherDays() {
    const now = new Date();
    if (now < startDate) {
        document.getElementById('togetherDays').textContent = "Jeszcze się nie znamy 😢";
        return;
    }

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        // Obliczamy liczbę dni w poprzednim miesiącu
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Liczymy całkowite miesiące razem (bez lat, czyli lata * 12 + miesiące)
    const totalMonths = years * 12 + months;

    document.getElementById('togetherDays').textContent =
        `Jesteśmy razem od ${totalMonths} miesięcy i ${days} dni ❤️`;
}


// Wywołaj przy starcie i aktualizuj co godzinę
updateTogetherDays();
setInterval(updateTogetherDays, 3600000);

// Uruchom co sekundę
setInterval(updateCountdown, 1000);

// Pierwsze wywołanie natychmiast
updateCountdown();
