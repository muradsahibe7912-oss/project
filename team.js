const teamMembers = [
    {
        id: 1,
        name: "Elməddin müəllim",
        contact: "994 50 841 21 20",
        photo: "hqdefault.jpg"
    },
    {
        id: 2,
        name: "Murad",
        contact: "994 51 819 10 46",
        photo: "hqdefault.jpg"
    },
    {
        id: 3,
        name: "Əli",
        contact: "994 50 523 70 ",
        photo: "hqdefault.jpg"
    },
    {
        id: 4,
        name: "Tural",
        contact: "994 55 328 08 18",
        photo: "hqdefault.jpg"
    }
];

function renderTeam() {
    const teamGrid = document.getElementById('teamGrid');
    
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="member-number">№${member.id}</div>
            <img src="${member.photo}" alt="${member.name}">
            <div class="member-name">${member.name}</div>
            <div class="member-position">${member.position}</div>
            <div class="member-email">${member.email}</div>
            <div class="member-description">${member.description}</div>
        `;
        teamGrid.appendChild(card);
    });
}
document.addEventListener('DOMContentLoaded', renderTeam);
