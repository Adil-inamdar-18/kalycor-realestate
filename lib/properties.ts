export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: string;
  priceNumeric: number;
  beds: number;
  baths: number;
  area: string;
  image: string;
  status: 'FOR SALE' | 'FOR RENT' | 'NEW';
  featured?: boolean;
  type: string;
  verified?: boolean;
  newLaunch?: boolean;
  readyToMove?: boolean;
  tagline?: string;
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern 3 BHK Residence',
    location: 'Baner, Pune',
    city: 'Pune',
    price: '₹1.85 Cr',
    priceNumeric: 18500000,
    beds: 3,
    baths: 3,
    area: '1,850 sq.ft.',
    image:
      'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'FOR SALE',
    featured: true,
    verified: true,
    readyToMove: true,
    type: 'Apartment',
    tagline: 'Spacious living with garden views',
  },
  {
    id: '2',
    title: 'Skyline Luxury Apartment',
    location: 'Worli, Mumbai',
    city: 'Mumbai',
    price: '₹4.25 Cr',
    priceNumeric: 42500000,
    beds: 3,
    baths: 2,
    area: '2,100 sq.ft.',
    image:
      'https://images.pexels.com/photos/14998334/pexels-photo-14998334.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'FOR SALE',
    featured: true,
    verified: true,
    newLaunch: true,
    type: 'Apartment',
    tagline: 'Sea-facing views in the heart of the city',
  },
  {
    id: '3',
    title: 'Riverside Penthouse',
    location: 'Whitefield, Bengaluru',
    city: 'Bengaluru',
    price: '₹2.75 Cr',
    priceNumeric: 27500000,
    beds: 4,
    baths: 4,
    area: '2,450 sq.ft.',
    image:
      'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'FOR SALE',
    featured: true,
    verified: true,
    readyToMove: true,
    type: 'Penthouse',
    tagline: 'Top-floor luxury with private terrace',
  },
  {
    id: '4',
    title: 'Garden Courtyard Villa',
    location: 'Banjara Hills, Hyderabad',
    city: 'Hyderabad',
    price: '₹3.45 Cr',
    priceNumeric: 34500000,
    beds: 4,
    baths: 4,
    area: '3,200 sq.ft.',
    image:
      'https://images.pexels.com/photos/8134745/pexels-photo-8134745.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'FOR SALE',
    featured: true,
    verified: true,
    readyToMove: true,
    type: 'Villa',
    tagline: 'Private gardens and open courtyard living',
  },
  {
    id: '5',
    title: 'Contemporary Family Home',
    location: 'Koregaon Park, Pune',
    city: 'Pune',
    price: '₹2.15 Cr',
    priceNumeric: 21500000,
    beds: 3,
    baths: 2,
    area: '1,920 sq.ft.',
    image:
      'https://images.pexels.com/photos/7031604/pexels-photo-7031604.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'FOR SALE',
    verified: true,
    readyToMove: true,
    type: 'Independent House',
    tagline: 'Modern design in a leafy neighbourhood',
  },
  {
    id: '6',
    title: 'Premium Office Space',
    location: 'BKC, Mumbai',
    city: 'Mumbai',
    price: '₹6.80 Cr',
    priceNumeric: 68000000,
    beds: 0,
    baths: 2,
    area: '3,500 sq.ft.',
    image:
      'https://images.pexels.com/photos/934586/pexels-photo-934586.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'FOR SALE',
    verified: true,
    type: 'Commercial',
    tagline: 'Grade-A office in Mumbai\'s business district',
  },
  {
    id: '7',
    title: 'Luxury Duplex Apartment',
    location: 'HSR Layout, Bengaluru',
    city: 'Bengaluru',
    price: '₹85,000/mo',
    priceNumeric: 85000,
    beds: 3,
    baths: 3,
    area: '1,680 sq.ft.',
    image:
      'https://images.pexels.com/photos/16110999/pexels-photo-16110999.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'FOR RENT',
    verified: true,
    newLaunch: true,
    type: 'Apartment',
    tagline: 'Double-height living in a prime tech corridor',
  },
  {
    id: '8',
    title: 'Serene Independent House',
    location: 'Civil Lines, Nagpur',
    city: 'Nagpur',
    price: '₹1.45 Cr',
    priceNumeric: 14500000,
    beds: 4,
    baths: 3,
    area: '2,200 sq.ft.',
    image:
      'https://images.pexels.com/photos/3958954/pexels-photo-3958954.jpeg?auto=compress&cs=tinysrgb&w=1200',
    status: 'FOR SALE',
    verified: true,
    readyToMove: true,
    type: 'Independent House',
    tagline: 'Peaceful living in a well-connected locality',
  },
];

export const featuredProperties = properties.filter((p) => p.featured);
