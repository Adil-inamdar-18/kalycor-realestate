export interface Category {
  id: string;
  name: string;
  count: number;
  image: string;
}

export const categories: Category[] = [
  {
    id: 'apartments',
    name: 'Apartments',
    count: 540,
    image:
      'https://images.pexels.com/photos/9170385/pexels-photo-9170385.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'villas',
    name: 'Villas',
    count: 186,
    image:
      'https://images.pexels.com/photos/10647324/pexels-photo-10647324.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'independent-houses',
    name: 'Independent Houses',
    count: 142,
    image:
      'https://images.pexels.com/photos/19516616/pexels-photo-19516616.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'plots',
    name: 'Plots',
    count: 98,
    image:
      'https://images.pexels.com/photos/27062931/pexels-photo-27062931.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'commercial',
    name: 'Commercial',
    count: 76,
    image:
      'https://images.pexels.com/photos/946312/pexels-photo-946312.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'luxury-homes',
    name: 'Luxury Homes',
    count: 64,
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
