const price6 = Math.floor(Math.random() * 6000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});
const price7 = Math.floor(Math.random() * 7000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});
const price8 = Math.floor(Math.random() * 8000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});
const price9 = Math.floor(Math.random() * 9000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});
const price10 = Math.floor(Math.random() * 10000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});


const categoryHotels = [{
  id: 1,
  name: 'Mountain Peak Retreat',
  location: "55/41 Schulist Cape",
  price: `${price6}`,
  image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
},{
  id: 2,
  name: 'Urban Oasis Hotel',
  location: "88 Koch Mountains Apt. 348",
  price: `${price7}`,
  image: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 3,
  name: 'Desert Mirage Resort',
  location: "26/45 Stehr Ridges Apt. 668",
  price: `${price8}`,
  image: 'https://images.unsplash.com/photo-1567636788276-40a47795ba4d?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 4,
  name: 'Coastal Breeze Inn',
  location: "11A/33 Sporer Row Suite 563",
  price: `${price9}`,
  image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}, {
  id: 5,
  name: 'Barceló Punta Umbría Mar',
  location: "69/20 Mills Drive Suite 482",
  price: `${price10}`,
  image: 'https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}];

export default categoryHotels
