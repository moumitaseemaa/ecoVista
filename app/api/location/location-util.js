const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    name: "Spain",
    latitude: 40.4637,
    longitude: -3.7492,
  },
  {
    name: "Sweden",
    latitude: 60.1282,
    longitude: 18.6435,
  },
  {
    name: "Switzerland",
    latitude: 46.8182,
    longitude: 8.2275,
  },
  {
    name: "Ukraine",
    latitude: 48.3794,
    longitude: 31.1656,
  },
  {
    name: "Iceland",
    latitude: 64.9631,
    longitude: -19.0208,
  },
  {
    name: "Ireland",
    latitude: 53.1424,
    longitude: -7.6921,
  },
  {
    name: "Italy",
    latitude: 41.8719,
    longitude: 12.5674,
  },
  {
    name: "Denmark",
    latitude: 56.2639,
    longitude: 9.5018,
  },
  {
    name: "Estonia",
    latitude: 58.5953,
    longitude: 25.0136,
  },
  {
    name: "Finland",
    latitude: 61.9241,
    longitude: 25.7482,
  },
  {
    name: "France",
    latitude: 46.6034,
    longitude: 1.8883,
  },
  {
    name: "Germany",
    latitude: 51.1657,
    longitude: 10.4515,
  },
  {
    name: "Greece",
    latitude: 39.0742,
    longitude: 21.8243,
  },
  {
    name: "Austria",
    latitude: 47.5162,
    longitude: 14.5501,
  },
  {
    name: "Belgium",
    latitude: 50.5039,
    longitude: 4.4699,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
    if (!location) return null;

    const found = data.find(
        (item) => item.location.toLowerCase() === location.toLowerCase()
    );

    return found || {};
}

export { getLocationByName, getLocations };
