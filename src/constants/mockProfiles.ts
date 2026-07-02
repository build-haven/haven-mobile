export type Profile = {
  id: string;
  firstName: string;
  age: number;
  bio: string;
  gender: string;
  distanceKm: number;
  photos: string[];
  interests: string[];
  isVerified: boolean;
};

export const MOCK_PROFILES: Profile[] = [
  {
    id: 'usr_8f72a',
    firstName: 'Priya',
    age: 26,
    bio: 'Software engineer by day, trying to keep my houseplants alive by night. Always down for a spontaneous road trip.',
    gender: 'Woman',
    distanceKm: 4,
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    ],
    interests: ['Live Music', 'Tech', 'Photography'],
    isVerified: true,
  },
  {
    id: 'usr_3b99c',
    firstName: 'Rohan',
    age: 28,
    bio: 'Weekend DIY warrior. I probably spend too much time watching market trends, but I make a mean cup of coffee.',
    gender: 'Man',
    distanceKm: 12,
    photos: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    ],
    interests: ['DIY Projects', 'Finance', 'Dogs'],
    isVerified: false,
  },
  {
    id: 'usr_1a22d',
    firstName: 'Kavya',
    age: 24,
    bio: 'Looking for someone to explore art galleries and thrift stores with.',
    gender: 'Woman',
    distanceKm: 2,
    photos: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    ],
    interests: ['Art Galleries', 'Thrifting'],
    isVerified: true,
  },
];
