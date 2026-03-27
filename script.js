// Data
const destinations = [
    {
        id: '1', name: 'Kyoto', location: 'Japan', category: 'Historical', rating: 4.9, reviews: 1240, price: '₹₹', searchTerms: 'kyoto japan asia temple shrine historical',
        image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>Experience the perfect blend of ancient traditions and modern harmony in Japan\'s cultural capital. Kyoto is famous for its classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses.</p>',
        bestTime: 'Mar to May (Spring)', estCost: '₹1,00,000 - ₹2,00,000 / week',
        activities: ['Visit Kinkaku-ji (Golden Pavilion)', 'Walk through Fushimi Inari Shrine', 'Traditional Tea Ceremony', 'Explore Arashiyama Bamboo Grove'],
        itinerary: [
            { day: 1, title: 'Arashiyama & Fushimi Inari', detail: 'Start early at the Arashiyama Bamboo Grove. In the afternoon, hike through the thousands of vermilion torii gates at Fushimi Inari Shrine. End your day exploring the Gion historic district.' },
            { day: 2, title: 'Historic Temples & Markets', detail: 'Visit the world-renowned Kiyomizu-dera Temple for city views. Walk through Sannen-zaka streets and explore the "Kyoto\'s Kitchen" - Nishiki Market for local delicacies.' },
            { day: 3, title: 'Zen Gardens & Golden Pavilion', detail: 'Marvel at the gold-leaf covered Kinkaku-ji. Later, find peace at the Ryoan-ji zen rock garden. Spend your evening by the Kamo River.' }
        ]
    },
    {
        id: '14', name: 'Paris', location: 'France', category: 'City', rating: 4.9, reviews: 8100, price: '₹₹₹', searchTerms: 'paris france europe city romantic eiffel',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: '<p>The City of Light draws millions with its unforgettable ambiance. Paris is globally celebrated for its art, fashion, gastronomy, and culture.</p>',
        bestTime: 'Apr to Jun / Sep to Oct', estCost: '₹1,80,000 - ₹3,50,000 / week',
        activities: ['Eiffel Tower Visit', 'Louvre Museum Tour', 'Seine River Cruise', 'Explore Montmartre'],
        itinerary: [
            { day: 1, title: 'Iconic Landmarks', detail: 'Walk through Île de la Cité to see Notre-Dame. Spend your afternoon at the Louvre Museum and enjoy a twilight view from the Eiffel Tower.' },
            { day: 2, title: 'Champs-Élysées & Art', detail: 'Stroll from the Arc de Triomphe down the Champs-Élysées. Visit the Musée d\'Orsay to see Impressionist masterpieces.' },
            { day: 3, title: 'Versailles or Montmartre', detail: 'Take a day trip to the Palace of Versailles. Alternatively, climb to the Sacré-Cœur in Montmartre for a bohemian evening.' }
        ]
    },
    {
        id: '4', name: 'Rome', location: 'Italy', category: 'Historical', rating: 4.7, reviews: 4890, price: '₹₹', searchTerms: 'rome italy europe historical city architecture',
        image: 'https://plus.unsplash.com/premium_photo-1661964123160-8d049fa07f0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>Rome, the Eternal City, is a living museum. Ruins of global empires stand next to bustling cafes, and breathtaking art fills historic piazzas.</p>',
        bestTime: 'Apr to Jun (Spring)', estCost: '₹80,000 - ₹1,80,000 / week',
        activities: ['Tour the Colosseum', 'Visit Vatican City', 'Throw a coin in Trevi Fountain', 'Authentic Pasta Making Class'],
        itinerary: [
            { day: 1, title: 'Ancient Empires', detail: 'Explore the Colosseum, Roman Forum, and Palatine Hill. End your evening at the Trevi Fountain and the Pantheon.' },
            { day: 2, title: 'Vatican & Squares', detail: 'Visit St. Peter\'s Basilica and the Vatican Museums. In the evening, walk through Piazza Navona and the Spanish Steps.' },
            { day: 3, title: 'Galleries & Gardens', detail: 'Visit the Borghese Gallery (reservations required) and stroll through the Borghese Gardens. Explore the charming Trastevere district for dinner.' }
        ]
    },
    {
        id: '5', name: 'Maldives', location: 'Maldives', category: 'Beach', rating: 4.9, reviews: 1850, price: '₹₹₹₹', searchTerms: 'maldives beach island ocean luxury resort',
        image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>The ultimate tropical paradise. Comprising thousands of coral islands, the Maldives offers pristine white-sand beaches, crystal-clear turquoise waters, and thriving marine life.</p>',
        bestTime: 'Nov to April', estCost: '₹2,50,000 - ₹5,80,000 / week',
        activities: ['Scuba Diving & Snorkeling', 'Stay in an Overwater Villa', 'Dolphin Watching Cruise', 'Private Island Dining'],
        itinerary: [
            { day: 1, title: 'Island Arrival', detail: 'Transfer to your resort via speedboat or seaplane. Unwind on the white sandy beaches and enjoy a sunset dinner by the ocean.' },
            { day: 2, title: 'Marine Adventure', detail: 'Embark on a guided snorkeling excursion to explore vibrant coral reefs. Later, take a dolphin sunset cruise or try paddleboarding.' },
            { day: 3, title: 'Malé Culture', detail: 'Take a speedboat to Malé for a city tour. Visit the Islamic Centre and local markets. Indulge in an Ayurvedic spa treatment in the evening.' }
        ]
    },
    {
        id: '6', name: 'New York City', location: 'USA', category: 'City', rating: 4.8, reviews: 5200, price: '₹₹₹', searchTerms: 'new york city usa north america urban',
        image: 'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>The city that never sleeps. Explore the iconic concrete jungle filled with towering skyscrapers, world-renowned museums, and diverse neighborhoods.</p>',
        bestTime: 'Sep to Nov / Apr to Jun', estCost: '₹1,25,000 - ₹2,50,000 / week',
        activities: ['Walk Central Park', 'See a Broadway Show', 'Visit Times Square & The Met', 'Stroll across Brooklyn Bridge'],
        itinerary: [
            { day: 1, title: 'Downtown Landmarks', detail: 'Visit the 9/11 Memorial and One World Trade Center. Take the Staten Island Ferry for views of Lady Liberty and walk across the Brooklyn Bridge.' },
            { day: 2, title: 'Midtown Magic', detail: 'Go up the Top of the Rock or Empire State Building. Explore Times Square, Grand Central Terminal, and catch a Broadway show.' },
            { day: 3, title: 'Park & Museum', detail: 'Spend your morning in Central Park. Spend the afternoon at The Met or MoMA. End your day exploring the High Line and Chelsea Market.' }
        ]
    },
    {
        id: '7', name: 'Ooty', location: 'Tamil Nadu, India', category: 'Mountain', rating: 4.7, reviews: 4520, price: '₹₹', searchTerms: 'ooty tamil nadu india mountain hill station nilgiris',
        image: 'https://plus.unsplash.com/premium_photo-1694475205503-d6c6a71f03bc?q=80&w=1201&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>Ooty is celebrated for its sprawling tea gardens, spectacular viewpoints, and winding colonial-era routes.</p>',
        bestTime: 'Oct to June', estCost: '₹20,000 - ₹45,000 / week',
        activities: ['Nilgiri Mountain Railway Ride', 'Boating in Ooty Lake', 'Visit Botanical Gardens', 'Explore Tea Estates'],
        itinerary: [
            { day: 1, title: 'Town Highlights', detail: 'Start at Doddabetta Peak for panoramic views. Visit the Botanical Gardens and spend your evening boating at Ooty Lake.' },
            { day: 2, title: 'Coonoor Scenic Loop', detail: 'Take the Toy Train to Coonoor. Visit Sim\'s Park and Lamb\'s Rock. Explore a local tea factory to learn about the brewing process.' },
            { day: 3, title: 'Lakes & Waterfalls', detail: 'Visit Pykara Lake and its beautiful waterfalls. Stop at the 9th Mile shooting point for some iconic photography sessions.' }
        ]
    },
    {
        id: '8', name: 'Manali', location: 'Himachal Pradesh, India', category: 'Mountain', rating: 4.8, reviews: 6200, price: '₹₹', searchTerms: 'manali himachal pradesh india snow mountain adventure',
        image: 'https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>A mesmerizing high-altitude Himalayan resort town, Manali is renowned for its backpacking center and honeymoon destination.</p>',
        bestTime: 'Oct to Feb (Winter) / Mar to June (Summer)', estCost: '₹25,000 - ₹60,000 / week',
        activities: ['Paragliding in Solang Valley', 'Trek to Rohtang Pass', 'Visit Hadimba Temple', 'Cafe Hopping in Old Manali'],
        itinerary: [
            { day: 1, title: 'Local Culture', detail: 'Visit the wooden Hadimba Temple. Explore the Manali Nature Park and spend your evening walking along the vibrant Mall Road.' },
            { day: 2, title: 'Adventure Valley', detail: 'Head to Solang Valley for paragliding or skiing. If accessible, drive to Rohtang Pass for breathtaking snow-capped mountain views.' },
            { day: 3, title: 'Ancient Naggar', detail: 'Visit the historic Naggar Castle. Explore local markets for Himachali handicrafts and relax in the hot springs at Vashisht.' }
        ]
    },
    {
        id: '9', name: 'Coorg', location: 'Karnataka, India', category: 'Mountain', rating: 4.6, reviews: 3800, price: '₹₹', searchTerms: 'coorg karnataka india mountain scotland coffee nature',
        image: 'https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>Often referred to as the "Scotland of India," Coorg is famous for its lush green landscapes and coffee plantations.</p>',
        bestTime: 'Sep to March', estCost: '₹20,000 - ₹40,000 / week',
        activities: ['Coffee Plantation Tour', 'Abbey Falls Trek', 'Visit Namdroling Monastery', 'Elephant Bathing at Dubare'],
        itinerary: [
            { day: 1, title: 'Madikeri Wonders', detail: 'Visit Abbey Falls and Madikeri Fort. End your day at Raja\'s Seat for a beautiful sunset view over the valley.' },
            { day: 2, title: 'Elephants & Temples', detail: 'Bathe elephants at Dubare Elephant Camp. Visit the Golden Temple (Namdroling Monastery) for a peaceful spiritual experience.' },
            { day: 3, title: 'River & Nature', detail: 'Relax at Nisargadhama Island. Drive to Talakaveri, the origin of the Cauvery river, and enjoy the coffee estate treks.' }
        ]
    },
    {
        id: '10', name: 'Hyderabad', location: 'Telangana, India', category: 'City', rating: 4.7, reviews: 7150, price: '₹₹', searchTerms: 'hyderabad telangana india city historical biryani charminar',
        image: 'https://images.unsplash.com/photo-1657981630164-769503f3a9a8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>Fondly known as the "City of Pearls," Hyderabad seamlessly combines a glorious past with a bustling tech sector.</p>',
        bestTime: 'Oct to March', estCost: '₹25,000 - ₹50,000 / week',
        activities: ['Explore Charminar & Laad Bazaar', 'Tour Golconda Fort', 'Taste Authentic Hyderabadi Biryani', 'Visit Ramoji Film City'],
        itinerary: [
            { day: 1, title: 'Old City Charm', detail: 'Visit the iconic Charminar and shop for bangles in Laad Bazaar. Explore the Mecca Masjid and Salarjung Museum.' },
            { day: 2, title: 'Film City Magic', detail: 'Spend a full day at Ramoji Film City, the world\'s largest integrated film studio complex with various sets and shows.' },
            { day: 3, title: 'Forts & Lakes', detail: 'Explore the majestic Golconda Fort and the Qutub Shahi Tombs. End your trip with a boat ride at Hussain Sagar Lake.' }
        ]
    },
    {
        id: '11', name: 'Jaipur', location: 'Rajasthan, India', category: 'Historical', rating: 4.8, reviews: 8500, price: '₹₹₹', searchTerms: 'jaipur rajasthan india historical pink city palace forts',
        image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        desc: '<p>Welcome to the "Pink City," rich in awe-inspiring Rajput heritage, majestic palaces, and formidable forts.</p>',
        bestTime: 'Nov to Feb (Winter)', estCost: '₹30,000 - ₹75,000 / week',
        activities: ['Explore Amber Fort', 'Photograph the Hawa Mahal', 'Visit City Palace', 'Shopping in Johari Bazaar'],
        itinerary: [
            { day: 1, title: 'Royal Heritage', detail: 'Tour the Amber Fort (Amber Mahal) and stop by the Jal Mahal on the way. Explore the City Palace and Hawa Mahal in the afternoon.' },
            { day: 2, title: 'Forts & Views', detail: 'Visit Nahargarh Fort for a bird\'s eye view of the Pink City. Explore the massive cannon at Jaigarh Fort and the Albert Hall Museum.' },
            { day: 3, title: 'Bazaars & Culture', detail: 'Shop for textiles in Johari and Bapu Bazaars. Visit the Birla Mandir and enjoy a traditional dinner at Chokhi Dhani.' }
        ]
    },
    {
        id: '12', name: 'Araku Valley', location: 'Andhra Pradesh, India', category: 'Mountain', rating: 4.5, reviews: 2400, price: '₹₹', searchTerms: 'araku valley andhra pradesh india mountain nature tribal',
        image: 'https://images.unsplash.com/photo-1717585163315-02e3f0a96584?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>Araku Valley is a relatively unexplored hill station known for its magnificent valleys and coffee plantations.</p>',
        bestTime: 'Sep to Feb', estCost: '₹15,000 - ₹35,000 / week',
        activities: ['Vist Borra Caves', 'Try Araku Tribal Coffee', 'Explore Tribal Museum', 'Chaparai Water Cascades'],
        itinerary: [
            { day: 1, title: 'Cave Exploration', detail: 'Take the scenic train ride from Vizag. Explore the ancient limestone Borra Caves and visit the Araku Tribal Museum.' },
            { day: 2, title: 'Coffee & Nature', detail: 'Visit a coffee plantation and the Coffee Museum. Relax at Chaparai Waterfalls and explore Padmapuram Gardens.' },
            { day: 3, title: 'Waterfalls & Peaks', detail: 'Visit Katiki Waterfalls and enjoy a trek. Drive to Galikonda Viewpoint for the highest peak view in the region.' }
        ]
    },
    {
        id: '13', name: 'Munnar', location: 'Kerala, India', category: 'Mountain', rating: 4.9, reviews: 5100, price: '₹₹₹', searchTerms: 'munnar kerala india mountain tea hills south',
        image: 'https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=1249&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: '<p>Set in the Western Ghats, Munnar is a haven of peace filled with sprawling tea estates and mist-covered hills.</p>',
        bestTime: 'Sep to March', estCost: '₹25,000 - ₹55,000 / week',
        activities: ['Eravikulam National Park Safari', 'Mattupetty Dam Boating', 'Tea Museum Tour', 'Hike to Anamudi Peak'],
        itinerary: [
            { day: 1, title: 'Estate Wonders', detail: 'Stroll through tea plantations and visit the Tata Tea Museum. Spend your afternoon at Mattupetty Dam and Echo Point.' },
            { day: 2, title: 'Wildlife Trails', detail: 'Start early for a safari at Eravikulam National Park. Visit Lakkam Waterfalls and Top Station for panoramic views.' },
            { day: 3, title: 'Spa & Spices', detail: 'Take a spice plantation tour. Conclude your trip with a rejuvenating Ayurvedic spa treatment and shop for local spices.' }
        ]
    }
];

// State & Initialization
let currentRegion = 'All';
let currentCategory = 'All';
let currentSort = 'popular';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('travel_favorites')) || [];

document.getElementById('current-year').textContent = new Date().getFullYear();

window.addEventListener('DOMContentLoaded', () => {
    populateBookingOptions();
    applyFilters();
    renderFavorites();
    setupEventListeners();
});

function setupEventListeners() {
    // Region tags
    document.querySelectorAll('#region-filters .filter-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            document.querySelectorAll('#region-filters .filter-tag').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            currentRegion = e.target.getAttribute('data-region');
            applyFilters();
        });
    });

    // Category tags
    document.querySelectorAll('#category-filters .filter-tag').forEach(tag => {
        tag.addEventListener('click', (e) => {
            document.querySelectorAll('#category-filters .filter-tag').forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.getAttribute('data-cat');
            applyFilters();
        });
    });

    // Sorters
    document.getElementById('sort-filter').addEventListener('change', (e) => {
        currentSort = e.target.value;
        applyFilters();
    });

    // Search inputs
    document.getElementById('global-search').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        applyFilters();
        if (searchQuery.length > 0) window.location.hash = '#destinations';
    });
    document.getElementById('hero-search').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleHeroSearch();
    });

    // Modal logic
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('details-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('details-modal')) closeModal();
    });

    // Forms
    document.getElementById('planner-form').addEventListener('submit', handlePlannerSubmit);
    document.getElementById('booking-form').addEventListener('submit', handleBookingSubmit);

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) nav.style.boxShadow = 'var(--shadow-md)';
        else nav.style.boxShadow = 'none';

        // update active nav link
        let current = '';
        document.querySelectorAll('section').forEach(sec => {
            if (window.scrollY >= (sec.offsetTop - 100)) current = sec.getAttribute('id');
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}` || (current === '' && a.getAttribute('href') === '#home')) {
                a.classList.add('active');
            }
        });
    });
}

function handleHeroSearch() {
    searchQuery = document.getElementById('hero-search').value.toLowerCase();
    document.getElementById('global-search').value = searchQuery;
    const heroCat = document.getElementById('hero-category').value;

    // Set category
    document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
    const activeTag = document.querySelector(`.filter-tag[data-cat="${heroCat}"]`);
    if (activeTag) activeTag.classList.add('active');
    currentCategory = heroCat;

    applyFilters();
    window.location.hash = '#destinations';
}

function applyFilters() {
    let filtered = destinations.filter(d => {
        const matchCat = currentCategory === 'All' || d.category === currentCategory;
        const isNational = d.location.toLowerCase().includes('india');
        const matchRegion = currentRegion === 'All' ||
            (currentRegion === 'National' && isNational) ||
            (currentRegion === 'International' && !isNational);
        const matchSearch = d.searchTerms.includes(searchQuery) || d.name.toLowerCase().includes(searchQuery) || d.location.toLowerCase().includes(searchQuery);
        return matchCat && matchRegion && matchSearch;
    });

    if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else filtered.sort((a, b) => b.reviews - a.reviews); // popularity

    renderGrid(filtered, 'main-grid');
}

function renderGrid(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    if (data.length === 0 && containerId === 'main-grid') {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-muted);">No destinations found matching your criteria.</div>';
        return;
    }

    data.forEach(item => {
        const isFav = favorites.includes(item.id);
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <button class="btn-favorite ${isFav ? 'active' : ''}" onclick="toggleFavorite('${item.id}', event)" aria-label="Save">
                    <svg viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </button>
            </div>
            <div class="card-body">
                <div class="card-header">
                    <h3 class="card-title">${item.name}</h3>
                    <div class="card-rating">
                        <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                        <span>${item.rating}</span>
                    </div>
                </div>
                <div class="card-location">
                    <svg viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    ${item.location}
                </div>
                <div class="card-desc">${item.desc.replace(/<[^>]*>?/gm, '')}</div>
                <button class="btn btn-outline btn-block" onclick="openDetails('${item.id}')">View Details</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Favorites Logic
function toggleFavorite(id, e) {
    e.stopPropagation();
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('travel_favorites', JSON.stringify(favorites));
    applyFilters();
    renderFavorites();
}

function renderFavorites() {
    const favGrid = document.getElementById('favorites-grid');
    const emptyState = document.getElementById('favorites-empty');

    // clear old cards but keep empty state
    const items = favGrid.querySelectorAll('.card');
    items.forEach(el => el.remove());

    if (favorites.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        const favData = destinations.filter(d => favorites.includes(d.id));
        const wrapper = document.createElement('div');
        wrapper.id = 'temp-fav';
        document.body.appendChild(wrapper); // temp
        renderGrid(favData, 'temp-fav');
        const cards = wrapper.childNodes;
        while (cards.length > 0) {
            favGrid.appendChild(cards[0]);
        }
        wrapper.remove();
    }
}

// Modal Logic
function openDetails(id) {
    const item = destinations.find(d => d.id === id);
    if (!item) return;

    document.getElementById('modal-img').src = item.image;
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-location').textContent = item.location;
    document.getElementById('modal-time').textContent = item.bestTime;
    document.getElementById('modal-cost').textContent = item.estCost;
    document.getElementById('modal-desc').innerHTML = item.desc;

    const actList = document.getElementById('modal-activities');
    actList.innerHTML = '';
    item.activities.forEach(act => {
        const li = document.createElement('li');
        li.textContent = act;
        actList.appendChild(li);
    });

    document.getElementById('details-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('details-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Trip Planner
function handlePlannerSubmit(e) {
    e.preventDefault();
    const days = parseInt(document.getElementById('plan-days').value) || 3;
    const destId = document.getElementById('plan-destination').value;
    const resBox = document.getElementById('plan-result');

    if (!destId) {
        resBox.innerHTML = '<p style="color:var(--text-main); font-weight:500;">Please choose a destination first.</p>';
        resBox.classList.remove('hidden');
        return;
    }

    let suggested = destinations.find(d => d.id === destId);
    let html = `
        <h4 style="font-size: 1.25rem; margin-bottom: 8px;">Trip to: ${suggested.name}, ${suggested.location}</h4>
        <p style="margin-bottom: 16px; color: var(--primary-color); font-weight: 600;">Estimated Budget for week: ${suggested.estCost}</p>
        <p style="margin-bottom: 24px;">Based on popular itineraries, here is your ${days}-day plan:</p>
    `;

    for (let i = 1; i <= days; i++) {
        // Use real itinerary if available, else rotate through activities
        let plan = suggested.itinerary && suggested.itinerary[i - 1] 
                   ? suggested.itinerary[i - 1] 
                   : { title: `Explore ${suggested.name}`, detail: `Spend your day visiting ${suggested.activities[(i - 1) % suggested.activities.length]} and exploring local surroundings.` };
        
        html += `
            <div class="day-plan">
                <h5>Day ${i}: ${plan.title}</h5>
                <p>${plan.detail}</p>
            </div>
        `;
    }

    resBox.innerHTML = html;
    resBox.classList.remove('hidden');
}

// Booking Simulation
function populateBookingOptions() {
    const selectBooking = document.getElementById('book-destination');
    const selectPlanner = document.getElementById('plan-destination');
    destinations.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.id;
        opt.textContent = `${d.name}, ${d.location}`;
        if (selectBooking) selectBooking.appendChild(opt);

        if (selectPlanner) {
            const opt2 = document.createElement('option');
            opt2.value = d.id;
            opt2.textContent = `${d.name}, ${d.location}`;
            selectPlanner.appendChild(opt2);
        }
    });
}

function handleBookingSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('book-name').value.trim();
    const email = document.getElementById('book-email').value.trim();
    const dest = document.getElementById('book-destination').value;
    const date = document.getElementById('book-date').value;
    const msgBox = document.getElementById('booking-msg');

    msgBox.classList.remove('hidden', 'alert-success', 'alert-error');

    if (!name || !email || !dest || !date) {
        msgBox.textContent = 'Please fill out all fields before submitting.';
        msgBox.classList.add('alert-error');
        return;
    }

    // simple email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        msgBox.textContent = 'Please enter a valid email address.';
        msgBox.classList.add('alert-error');
        return;
    }

    // Success
    msgBox.textContent = `Thank you, ${name}! Your booking request for ${date} has been received. We will contact you at ${email} shortly.`;
    msgBox.classList.add('alert-success');
    document.getElementById('booking-form').reset();
}
