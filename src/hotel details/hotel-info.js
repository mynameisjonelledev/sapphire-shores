const ramdomPrice = Math.floor(Math.random() * 1000);
const formattedPrice = ramdomPrice.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});

const price1 = Math.floor(Math.random() * 1000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});

const price2 = Math.floor(Math.random() * 2000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});
const price3 = Math.floor(Math.random() * 3000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});
const price4 = Math.floor(Math.random() * 4000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});
const price5 = Math.floor(Math.random() * 5000).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});


const hotels = [{
  id: 1,
  name: "The Spectator Hotel",
  location: "95 Dooley Light Suite 329",
  price: `${price1}`,
  image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  category: 'Top Rated'
}, {
  id: 2,
  name: "Marseilles Beachfront Hotel",
  location: "92A Hyatt Tunnel Apt. 916",
  price: `${price2}`,
  image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  category: 'Top Rated'
}, {
  id: 3,
  name: "Andronis Boutique Hotel",
  location: "71A Leffler Mission Suite 322",
  price: `${price3}`,
  image: 'https://images.unsplash.com/photo-1474690455603-a369ec1293f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   category: 'Top Rated'
}, {
  id: 4,
  name: "Waldorf Astoria Los Cabos",
  location: "6A Beier Harbors",
  price: `${price4}`,
  image: 'https://plus.unsplash.com/premium_photo-1680028256635-17e7f3ebbb23?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   category: 'Top Rated'
}, {
  id: 5,
  name: "Deco Boutique Hotel",
  location: "52/60 Gleason Ridges",
  price: `${price5}`,
  image: 'https://plus.unsplash.com/premium_photo-1672252617591-cfef963eeefa?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   category: 'Top Rated'
}];

export default hotels;


