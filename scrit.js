// script.js - Funktionen
document.getElementById('calculate-btn').addEventListener('click', function() {
    const plz = document.getElementById('plz').value;
    
    // Mock-Daten (ersetzbar durch echte API)
    const mockResults = [
        {
            title: "KfW-Förderung",
            description: "Energieeffizientes Bauen",
            amount: "Bis zu 50.000€",
            link: "#"
        },
        {
            title: "BAFA-Zuschuss",
            description: "Heizungsoptimierung",
            amount: "Bis zu 40% Förderung",
            link: "#"
        }
    ];

    displayResults(mockResults);
});

function displayResults(results) {
    const container = document.getElementById('results');
    container.innerHTML = '';

    results.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <p class="amount">${item.amount}</p>
            <a href="${item.link}" class="cta-link">Mehr erfahren →</a>
        `;
        container.appendChild(card);
    });
}
