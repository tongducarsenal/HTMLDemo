const teamMembers = [
    {
        src: 'anh1.jpg',
        name: 'James Alexander',
        alias: '@james',
        email: 'james@example.com',
        status: 'active',
        tags: ['dev', 'QA']
    },
    {
        src: 'anh1.jpg',
        name: 'Lilia Taylor',
        alias: '@lilia',
        email: 'lilia.taylor@example.com',
        status: 'active',
        tags: ['design', 'marketing']
    },
    {
        src: 'anh1.jpg',
        name: 'Drew Cano',
        email: 'drew.crano@example.com',
        alias: '@drew',
        status: 'inactive',
        tags: ['design', 'marketing']
    },

    {
        src: 'anh1.jpg',
        name: 'Nate Conor',
        email: 'nate@example.com',
        alias: '@nate',
        status: 'active',
        tags: ['dev']
    },
    {
        name: 'Melissa Brantley',
        src: 'anh1.jpg',
        email: 'melissa@example.com',
        alias: '@melissa',
        status: 'active',
        tags: ['marketing']
    },
    {
        name: 'Anna Smith',
        src: 'anh1.jpg',
        email: 'anna.smith@example.com',
        alias: '@anna',
        status: 'active',
        tags: ['marketing', 'design']
    },
    {
        src: 'anh1.jpg',
        name: 'Natalia Alexandra',
        email: 'natalia@example.com',
        alias: '@natalia',
        status: 'inactive',
        tags: ['dev', 'marketing']
    },
];


let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${teamMembers.length}) Members`;
console.log(tableRowCount)

let tableBody = document.getElementById('team-member-rows');

const itemsOnPage = 5;

const numberOfPages = Math.ceil(teamMembers.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = teamMembers
.filter((teamMember, i) => (((start - 1) * itemsOnPage) < i + 1) && (i+1 <= start * itemsOnPage))
.map(
  (teamMember) => {
    return `<tr>
        <td class="team-member-profile">
            <img src="${teamMember.src}" alt="${teamMember.name}">
            <span class="profile-info">
                <span class="profile-info__name">
                    ${teamMember.name}
                </span>
                <span class=profile-info__alias>
                    ${teamMember.alias}
                </span>
            </span>
        </td>
        <td>
            <span class="status status--${teamMember.status}">
                ${teamMember.status}
            </span>
        </td>
        <td>${teamMember.email}</td>
        <td>
            <span class="tags">
                ${teamMember.tags.map((tag) => `<span class="tag tag--${tag}">${tag}</span>`).join('')}
            </span>        
        </td>
    </tr>`;
});

tableBody.innerHTML = mappedRecords.join('');

const pagination = document.querySelector('.pagination');

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    
    console.log(pageNumber, start)

    linkList.push(`<li><a href="?page=${pageNumber}" ${pageNumber == start ? 'class="active"' : ''} title="page ${pageNumber}">${pageNumber}</a></li>`);
}

pagination.innerHTML = linkList.join('');