export const buildGoogleMapsUrl = (lat: number, lng: number) =>
  `https://maps.google.com/?q=${lat},${lng}`;

export const buildDirectionsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
