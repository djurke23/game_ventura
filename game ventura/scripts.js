// Funkcionalnost za burger meni
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Zatvaranje menija klikom izvan njega
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
        mobileMenu.classList.remove('active');
    }
});

// Sprečavanje zatvaranja menija klikom unutar njega
mobileMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Smooth scroll za linkove u mobilnom meniju
document.querySelectorAll('.mobile-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        mobileMenu.classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// kraj



// top sellers


document.querySelectorAll('.game-card').forEach(card => {
    card.addEventListener('click', () => {
        // Ovde dodajte logiku za preusmeravanje na stranicu igrice
        // Na primer:
        // window.location.href = '/game/' + card.dataset.gameId;
        console.log('Kliknuto na igricu:', card.querySelector('h3').textContent);
    });
});


// kraj





// newsletter


document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Ovde dodajte kod za slanje email-a na vaš server
    // Na primer, korišćenjem fetch API-ja:
    
    fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Hvala na prijavi!');
        // Ovde možete dodati kod za prikazivanje poruke o uspešnoj prijavi
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Došlo je do greške prilikom prijave. Molimo pokušajte ponovo.');
    });
});



// kraj






// recenzije //


const games = [
    { name: 'Call of Duty', image: 'https://via.placeholder.com/100', rating: 5, review: 'Odlična igra 10/10' },
    { name: 'FIFA 24', image: 'https://via.placeholder.com/100', rating: 4, review: 'Najbolji fudbalski simulator' },
    { name: 'Assassin\'s Creed', image: 'https://via.placeholder.com/100', rating: 5, review: 'Epska avantura' },
    { name: 'Game Pass 3 Meseca', image: 'https://via.placeholder.com/100', rating: 5, review: 'Odlična vrednost' },
    { name: 'Cyberpunk 2077', image: 'https://via.placeholder.com/100', rating: 4, review: 'Impresivna open-world igra' }
];

const gamesGrid = document.getElementById('gamesGrid');

games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card2';
    gameCard.innerHTML = `
        <img src="${game.image}" alt="${game.name}">
        <h3>${game.name}</h3>
        <div class="rating">${'★'.repeat(game.rating)}${'☆'.repeat(5-game.rating)}</div>
        <p>${game.review}</p>
    `;
    gamesGrid.appendChild(gameCard);
});

// kraj




// strelica

// Scroll to top functionality
const scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};




// kraj