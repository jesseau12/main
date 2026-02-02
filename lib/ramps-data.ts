export type Ramp = {
  name: string;
  slug: string;
  county: string;
  address: string;
  lat: number;
  lng: number;
  features: string[];
  notes: string;
  imageUrl: string;
  imageAlt: string;
  officialUrl: string;
  officialSource: string;
};

export const ramps: Ramp[] = [
  {
    name: 'Skidaway Island State Park Boat Ramp',
    slug: 'skidaway-island-state-park-boat-ramp',
    county: 'Chatham County',
    address: '52 Diamond Causeway, Savannah, GA 31411',
    lat: 31.9348,
    lng: -81.0461,
    features: ['Floating dock', 'Ample parking', 'Kayak-friendly launch', 'Restrooms nearby'],
    notes:
      'Sheltered launch tucked inside the state park with quick access to the Intracoastal Waterway.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Skidaway_Island_State_Park.jpg',
    imageAlt: 'Boardwalk through the salt marsh at Skidaway Island State Park',
    officialUrl: 'https://gastateparks.org/SkidawayIsland',
    officialSource: 'Georgia State Parks'
  },
  {
    name: 'Fort McAllister State Park Boat Ramp',
    slug: 'fort-mcallister-state-park-boat-ramp',
    county: 'Bryan County',
    address: '3894 Fort McAllister Rd, Richmond Hill, GA 31324',
    lat: 31.7949,
    lng: -81.2148,
    features: ['Two-lane ramp', 'Courtesy dock', 'Marsh views', 'Picnic tables'],
    notes:
      'Launch on the Ogeechee River with easy access to coastal marshes and historic fort grounds.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Fort_McAllister_State_Park.jpg',
    imageAlt: 'Historic earthworks and trees at Fort McAllister State Park',
    officialUrl: 'https://gastateparks.org/FortMcAllister',
    officialSource: 'Georgia State Parks'
  },
  {
    name: 'Fort Pulaski National Monument Boat Launch',
    slug: 'fort-pulaski-national-monument-boat-launch',
    county: 'Chatham County',
    address: '101 Fort Pulaski Rd, Savannah, GA 31410',
    lat: 32.0352,
    lng: -80.9011,
    features: ['Tidal access', 'Views of Cockspur Island', 'Picnic lawns', 'Ranger presence'],
    notes:
      'Ideal for history lovers with a short paddle to the fort and birdwatching along the river.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Fort_Pulaski_National_Monument.jpg',
    imageAlt: 'Fort Pulaski National Monument exterior view',
    officialUrl: 'https://www.nps.gov/fopu/index.htm',
    officialSource: 'National Park Service'
  },
  {
    name: 'Lazaretto Creek Boat Ramp',
    slug: 'lazaretto-creek-boat-ramp',
    county: 'Chatham County',
    address: '1 Forts of Tybee Rd, Tybee Island, GA 31328',
    lat: 32.0199,
    lng: -80.8468,
    features: ['Multi-lane ramp', 'Fishing access', 'Lighting', 'Large staging area'],
    notes:
      'Popular public launch for inshore anglers with direct access to the Tybee Back River.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Tybee_Island_Lighthouse_2017.jpg',
    imageAlt: 'Tybee Island Lighthouse near coastal waterways',
    officialUrl: 'https://tybeeislandga.gov/',
    officialSource: 'City of Tybee Island'
  },
  {
    name: 'Butter Bean Beach Boat Ramp',
    slug: 'butter-bean-beach-boat-ramp',
    county: 'Chatham County',
    address: 'E Diamond Causeway, Savannah, GA 31406',
    lat: 31.9754,
    lng: -81.0617,
    features: ['Double ramp', 'Marsh outlook', 'Restrooms', 'Shaded picnic area'],
    notes:
      'Quick launch for day trips on the Vernon and Wilmington Rivers with shaded staging.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Savannah_River_from_Factors_Walk.jpg',
    imageAlt: 'Savannah River viewed from the riverfront',
    officialUrl: 'https://www.savannahga.gov/',
    officialSource: 'City of Savannah'
  },
  {
    name: 'Richmond Hill City Boat Ramp',
    slug: 'richmond-hill-city-boat-ramp',
    county: 'Bryan County',
    address: '3399 Fort McAllister Rd, Richmond Hill, GA 31324',
    lat: 31.827,
    lng: -81.2844,
    features: ['Covered staging area', 'Fishing pier nearby', 'Plenty of parking', 'Playground close'],
    notes:
      'Convenient city-managed launch with family amenities near the Ogeechee River.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Ogeechee_River_bridge.jpg',
    imageAlt: 'Bridge over the Ogeechee River',
    officialUrl: 'https://www.richmondhillga.gov/',
    officialSource: 'City of Richmond Hill'
  }
];

export const counties = Array.from(new Set(ramps.map((ramp) => ramp.county))).sort();
export const amenities = Array.from(new Set(ramps.flatMap((ramp) => ramp.features))).sort();
