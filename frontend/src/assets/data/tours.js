import borobudur from "../images/borobudur.jpg";
import kota_tua from "../images/kota_tua.jpg";
import monas from "../images/monas.jpg";
import danau_kenanga from "../images/danau_kenanga.jpg";

const tours = [
  {
    id: "01",
    title: "Candi Borobudur",
    city: "Magelang",
    distance: 1500,
    address:'Jalan Jalan Kuy',
    price: 15,
    maxGroupSize: 10,
    desc: "Candi Borobudur adalah candi",
    reviews: [
      {
        name: "Syamsul",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: borobudur,
    featured: true,
  },
  {
    id: "02",
    title: "Monumen Nasional",
    city: "Jakarta",
    distance: 400,
    price: 5,
    maxGroupSize: 6,
    desc: "MONAS atau yang biasa disebut Monumen Nasional",
    reviews: [
      {
        name: "Syamsul",
        rating: 4.3,
      },
    ],
    avgRating: 4.6,
    photo: monas,
    featured: true,
  },
  {
    id: "03",
    title: "Kota Tua",
    city: "Jakarta",
    distance: 300,
    price: 10,
    maxGroupSize: 8,
    desc: "Kota Tua adalah peninggalan Belanda",
    reviews: [
      {
        name: "Syamsul",
        rating: 4.8,
      },
    ],
    avgRating: 4.7,
    photo: kota_tua,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: danau_kenanga,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: danau_kenanga,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: danau_kenanga,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: danau_kenanga,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      
    ],
    avgRating: 0,
    photo: danau_kenanga,
    featured: false,
  },
  {
    id: "09",
    title: "Love Gate, Korea",
    city: "Korea",
    distance: 700,
    price: 78,
    maxGroupSize: 2,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhonny",
        rating: 4.3,
      },
    ],
    avgRating: 0,
    photo: danau_kenanga,
    featured: false,
  },
];

export default tours;