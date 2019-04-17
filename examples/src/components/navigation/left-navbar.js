const navObject = [{
  name: 'LayOut',
  items: [{
    name: 'Views',
    link: '#!layout/views'
  }, {
    name: 'Tables',
    link: '#!layout/lists'
  }, {
    name: 'Lists',
    link: '#!/layout/lists'
  }]
}, {
  name: 'User Management',
  items: [{
    name: 'Users',
    link: '!#/user-managment/users'
  }]
}, {
  name: 'Working links',
  items: [{
    name: 'Users',
    link: '#!/users'
  }, {
    name: 'Products',
    link: '#!/products'
  }]
}];

const navItemTemplate = x => `<li><a href="${x.link}" data-navigo>${x.name}</a></li>`;

const navTemplate = x => `<ul class="nav-item">
  <br> <p>${x.name}</p>
  ${x.items.map(navItemTemplate).join('')}
  </ul>
`;

export default function nav() {
  return navObject.map(navTemplate).join('');
}
