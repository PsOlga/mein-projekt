// import { eventsStore } from "./scripts/data-grid.js";
// import { createDomElement } from "./scripts/utils.js";
// import { formatDate } from "./scripts/utils.js";

// const eventTipe = document.querySelector("#event-type");
// const eventDistance = document.querySelector("#event-distance");
// const eventCategory = document.querySelector("#event-category");

// const eventsFilter = [
//     {}
// ]




























const events = [
    { name: 'Event 1', distance: 5, category: 'Social Activities' },
    { name: 'Event 2', distance: 10, category: 'Hobbies and Passions' },
    { name: 'Event 3', distance: 15, category: 'Health and Wellbeing' },
    { name: 'Event 4', distance: 25, category: 'Business' },
    { name: 'Event 5', distance: 50, category: 'Technology' }
];

function filterEvents() {
    const selectedDistance = document.getElementById('event-distance').value;
    const selectedCategory = document.getElementById('event-category').value;

    const filteredEvents = events.filter(event => {
        const distanceMatch = selectedDistance === 'any' || event.distance == selectedDistance;
        const categoryMatch = selectedCategory === 'any' || event.category === selectedCategory;
        return distanceMatch && categoryMatch;
    });

    displayEvents(filteredEvents);
}

function displayEvents(events) {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = events.map(event => `<div>${event.name} - ${event.distance} km - ${event.category}</div>`).join('');
}

document.getElementById('event-distance').addEventListener('change', filterEvents);
document.getElementById('event-category').addEventListener('change', filterEvents);

// Initial display
displayEvents(events);
0