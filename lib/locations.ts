export interface Location {
  id: string;
  city: string;
  count: number;
  image: string;
}

export const locations: Location[] = [
  {
    id: 'mumbai',
    city: 'Mumbai',
    count: 412,
    image:
      'https://images.pexels.com/photos/5414582/pexels-photo-5414582.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'pune',
    city: 'Pune',
    count: 248,
    image:
      'https://images.pexels.com/photos/38986357/pexels-photo-38986357.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'nagpur',
    city: 'Nagpur',
    count: 86,
    image:
      'https://images.pexels.com/photos/3581694/pexels-photo-3581694.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'bengaluru',
    city: 'Bengaluru',
    count: 327,
    image:
      'https://images.pexels.com/photos/9432498/pexels-photo-9432498.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    count: 195,
    image:
      'https://images.pexels.com/photos/13690341/pexels-photo-13690341.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'delhi-ncr',
    city: 'Delhi NCR',
    count: 289,
    image:
      'https://images.pexels.com/photos/11442140/pexels-photo-11442140.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];
