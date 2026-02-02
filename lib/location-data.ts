export type LocationItem = {
  name: string;
  address: string;
  amenities: string[];
  description: string;
};

export type CategoryKey = 'parks' | 'playgrounds' | 'dog-parks' | 'trails';

export const categoryTitles: Record<CategoryKey, string> = {
  parks: 'Parks',
  playgrounds: 'Playgrounds',
  'dog-parks': 'Dog Parks',
  trails: 'Trails'
};

export const categoryDescriptions: Record<CategoryKey, string> = {
  parks:
    'Find green spaces with room to picnic, play, and explore. These parks offer shaded lawns, waterfront views, and easy access for family outings.',
  playgrounds:
    'Discover playful spaces with safe equipment, shaded benches, and nearby amenities for a stress-free family adventure.',
  'dog-parks':
    'Enjoy off-leash areas and pet-friendly parks with open fields, walking loops, and water stations for four-legged explorers.',
  trails:
    'Plan easy-to-follow trails with scenic lookouts, stroller-friendly paths, and nearby stops for snacks or rest.'
};

export const sampleLocations: Record<CategoryKey, LocationItem[]> = {
  parks: [
    {
      name: 'Forsyth Park',
      address: 'Drayton St & W Gaston St, Savannah, GA 31401',
      amenities: ['Splash pad', 'Walking paths', 'Picnic lawns'],
      description: 'Iconic city park with wide open lawns, a historic fountain, and plenty of room for families to unwind.'
    },
    {
      name: 'Daffin Park',
      address: '1500 E Victory Dr, Savannah, GA 31404',
      amenities: ['Playground', 'Dog-friendly trails', 'Ball fields'],
      description: 'Shaded pathways and open fields make this a favorite for weekend strolls and casual games.'
    },
    {
      name: 'Lake Mayer Park',
      address: '18500 Montgomery Cross Rd, Savannah, GA 31406',
      amenities: ['Fishing lake', 'Disc golf', 'Playground'],
      description: 'Family-friendly destination with a loop around the lake, picnic shelters, and plenty of parking.'
    },
    {
      name: 'Tom Triplett Park',
      address: '10 Tom Triplett Rd, Pooler, GA 31322',
      amenities: ['Boat rentals', 'Walking trail', 'Picnic shelters'],
      description: 'A nearby escape in Pooler with lake views, paddle boats, and an easy loop trail.'
    },
    {
      name: 'Skidaway Island State Park',
      address: '52 Diamond Causeway, Savannah, GA 31411',
      amenities: ['Nature trails', 'Observation deck', 'Visitor center'],
      description: 'Coastal Georgia marsh views, wildlife sightings, and quiet trails for families.'
    },
    {
      name: 'Bacon Park',
      address: '599 E Bacon St, Savannah, GA 31406',
      amenities: ['Golf course', 'Playground', 'Walking track'],
      description: 'Local gem with a relaxed atmosphere and plenty of space for kids to burn energy.'
    },
    {
      name: 'Henderson Golf Course Park',
      address: '1 Al Henderson Dr, Savannah, GA 31419',
      amenities: ['Walking paths', 'Picnic tables', 'Open lawns'],
      description: 'Wide green spaces and shade trees make it a calm stop near the golf course.'
    },
    {
      name: 'Savannah Ogeechee Canal Museum & Nature Center',
      address: '681 Fort Argyle Rd, Savannah, GA 31419',
      amenities: ['Nature trails', 'Museum exhibits', 'Boardwalk'],
      description: 'Historic canal setting with family-friendly trails and an educational center.'
    },
    {
      name: 'Tybee Island Memorial Park',
      address: '2 Van Horne Ave, Tybee Island, GA 31328',
      amenities: ['Playground', 'Sports fields', 'Beach access nearby'],
      description: 'Pair beach time with playground fun at this central Tybee Island park.'
    },
    {
      name: 'Riverside Park',
      address: '1002 Riverview Dr, Savannah, GA 31404',
      amenities: ['Dog-friendly paths', 'Picnic tables', 'River views'],
      description: 'Neighborhood riverside escape with breezes, benches, and a small playground area.'
    }
  ],
  playgrounds: [
    {
      name: 'Jaycee Park Playground',
      address: '30 Van Horne Ave, Tybee Island, GA 31328',
      amenities: ['Climbing structures', 'Shade trees', 'Nearby restrooms'],
      description: 'Seaside playground with soft ground cover and space for younger kids to explore.'
    },
    {
      name: 'J.F. Gregory Park Playground',
      address: '1115 2nd Ave, Pooler, GA 31322',
      amenities: ['Splash pad', 'Sports courts', 'Walking track'],
      description: 'A popular Pooler spot with a splash pad and modern play equipment.'
    },
    {
      name: 'Lake Mayer Playground',
      address: '18500 Montgomery Cross Rd, Savannah, GA 31406',
      amenities: ['Play towers', 'Picnic shelter', 'Restrooms'],
      description: 'Large playground near the lake with plenty of seating and shade.'
    },
    {
      name: 'Hull Park Playground',
      address: '34 E 61st St, Savannah, GA 31405',
      amenities: ['Basketball courts', 'Open field', 'Play equipment'],
      description: 'Neighborhood park with a small playground and open space for games.'
    },
    {
      name: 'Bacon Park Playground',
      address: '599 E Bacon St, Savannah, GA 31406',
      amenities: ['Play structures', 'Picnic tables', 'Walking path'],
      description: 'Easygoing spot to let kids climb while adults enjoy a shaded break.'
    },
    {
      name: 'Forsyth Park Playground',
      address: 'Drayton St & W Gaston St, Savannah, GA 31401',
      amenities: ['Playground', 'Splash pad', 'Historic fountain'],
      description: 'Central playground with plenty of nearby cafés and restrooms.'
    },
    {
      name: 'Daffin Park Play Area',
      address: '1500 E Victory Dr, Savannah, GA 31404',
      amenities: ['Swing set', 'Open lawn', 'Shade trees'],
      description: 'A quieter playground surrounded by tall oaks and walking paths.'
    },
    {
      name: 'Lake Mayer Community Park',
      address: '18500 Montgomery Cross Rd, Savannah, GA 31406',
      amenities: ['Playground', 'Picnic pavilion', 'Fishing lake'],
      description: 'Community space with a playground and family-friendly lake views.'
    },
    {
      name: 'Otis S. Johnson Park Playground',
      address: '201 W 46th St, Savannah, GA 31405',
      amenities: ['Basketball courts', 'Open lawn', 'Play equipment'],
      description: 'City park playground with room for pickup games and playtime.'
    },
    {
      name: 'Savannah Highlands Playground',
      address: '300 Highlands Blvd, Savannah, GA 31411',
      amenities: ['Play equipment', 'Walking trail', 'Benches'],
      description: 'Quiet residential playground with trails and shaded seating.'
    }
  ],
  'dog-parks': [
    {
      name: 'Daffin Dog Park',
      address: '1500 E Victory Dr, Savannah, GA 31404',
      amenities: ['Separate dog areas', 'Water stations', 'Shade trees'],
      description: 'Well-loved fenced dog park with benches and grassy areas.'
    },
    {
      name: 'Herty Pines Dog Park',
      address: '1120 W 50th St, Savannah, GA 31405',
      amenities: ['Agility features', 'Picnic tables', 'Walking paths'],
      description: 'Spacious dog park with pine shade and a relaxed neighborhood vibe.'
    },
    {
      name: 'The Dog Park at Lake Mayer',
      address: '18500 Montgomery Cross Rd, Savannah, GA 31406',
      amenities: ['Fenced areas', 'Water access nearby', 'Parking'],
      description: 'Close to lake trails with plenty of room for dogs to roam.'
    },
    {
      name: 'Tybee Island Dog Park',
      address: 'Tybee Island, GA 31328',
      amenities: ['Off-leash space', 'Benches', 'Beach access nearby'],
      description: 'Island dog park with coastal breezes and nearby beach walks.'
    },
    {
      name: 'Bay Street Dog Park',
      address: '500 E Bay St, Savannah, GA 31401',
      amenities: ['Fenced play area', 'Water bowls', 'City views'],
      description: 'Compact downtown dog park perfect for quick play breaks.'
    },
    {
      name: 'Bacon Park Dog Area',
      address: '599 E Bacon St, Savannah, GA 31406',
      amenities: ['Open fields', 'Water fountain', 'Walking path'],
      description: 'Relaxed dog-friendly space with nearby walking loops.'
    },
    {
      name: 'Ellis Square Pet Relief Area',
      address: '24 W Bryan St, Savannah, GA 31401',
      amenities: ['Shaded seating', 'Nearby cafés', 'Historic district access'],
      description: 'Convenient pet stop for downtown walks and quick breaks.'
    },
    {
      name: 'Wilmington Riverfront Park',
      address: '141 W River St, Savannah, GA 31401',
      amenities: ['Leash-friendly paths', 'River views', 'Benches'],
      description: 'Riverfront strolls with scenic views and dog-friendly paths.'
    },
    {
      name: 'Dorchesters Dog-Friendly Trailhead',
      address: '8 Hutchinson Island Rd, Savannah, GA 31421',
      amenities: ['Trail access', 'Open lawns', 'Parking'],
      description: 'Leash-friendly trailhead with wide open lawns for quick play.'
    },
    {
      name: 'Forsyth Park Dog Zone',
      address: 'Drayton St & W Gaston St, Savannah, GA 31401',
      amenities: ['Open lawn', 'Shade trees', 'Nearby water station'],
      description: 'A popular stop for dog walkers near Savannah’s iconic fountain.'
    }
  ],
  trails: [
    {
      name: 'McQueen’s Island Trail',
      address: 'Fort Pulaski Rd, Savannah, GA 31410',
      amenities: ['Biking', 'Birdwatching', 'Scenic marsh views'],
      description: 'Flat, scenic trail connecting Savannah to Tybee Island with wildlife sightings.'
    },
    {
      name: 'Skidaway Island Park Trails',
      address: '52 Diamond Causeway, Savannah, GA 31411',
      amenities: ['Boardwalks', 'Observation deck', 'Nature center'],
      description: 'Coastal trails with elevated boardwalks and serene marsh vistas.'
    },
    {
      name: 'Savannah Ogeechee Canal Trail',
      address: '681 Fort Argyle Rd, Savannah, GA 31419',
      amenities: ['Historic canal', 'Wildlife viewing', 'Easy terrain'],
      description: 'Peaceful trail along a historic canal with educational signage.'
    },
    {
      name: 'Truman Linear Park Trail',
      address: '6200 Truman Pkwy, Savannah, GA 31405',
      amenities: ['Paved path', 'Bike-friendly', 'Neighborhood access'],
      description: 'Convenient paved trail for quick walks or bike rides.'
    },
    {
      name: 'Lake Mayer Loop',
      address: '18500 Montgomery Cross Rd, Savannah, GA 31406',
      amenities: ['Lake views', 'Fishing pier', 'Playground nearby'],
      description: 'Easy loop around the lake with benches for rest stops.'
    },
    {
      name: 'Hutchinson Island Riverwalk',
      address: 'Hutchinson Island, Savannah, GA 31421',
      amenities: ['River views', 'Leash-friendly', 'Shuttle access'],
      description: 'Gentle riverfront walk with skyline views of historic Savannah.'
    },
    {
      name: 'Whitemarsh Preserve Trail',
      address: '5000 Whitemarsh Rd, Savannah, GA 31410',
      amenities: ['Boardwalk', 'Wildlife viewing', 'Quiet setting'],
      description: 'Nature preserve trail with marsh overlooks and a peaceful atmosphere.'
    },
    {
      name: 'Savannah Riverwalk',
      address: '100 E Bay St, Savannah, GA 31401',
      amenities: ['Cobblestone paths', 'Riverfront views', 'Dining nearby'],
      description: 'Historic waterfront stroll with shops, restaurants, and scenic views.'
    },
    {
      name: 'Oatland Island Wildlife Center Trail',
      address: '711 Sandtown Rd, Savannah, GA 31410',
      amenities: ['Nature trails', 'Wildlife exhibits', 'Boardwalk'],
      description: 'Educational trails featuring native wildlife and shaded boardwalks.'
    },
    {
      name: 'Bonaventure Cemetery Walking Paths',
      address: '330 Bonaventure Rd, Savannah, GA 31404',
      amenities: ['Historic landscapes', 'Shaded paths', 'Photo-friendly spots'],
      description: 'Historic walking paths under moss-draped oaks with river views.'
    }
  ]
};

export const footerCities = [
  { city: 'Savannah', state: 'GA' },
  { city: 'Charleston', state: 'SC' },
  { city: 'Jacksonville', state: 'FL' },
  { city: 'Asheville', state: 'NC' },
  { city: 'Birmingham', state: 'AL' },
  { city: 'Nashville', state: 'TN' }
];

export const categoryOrder: CategoryKey[] = ['parks', 'playgrounds', 'dog-parks', 'trails'];
