import axios from "axios";

// Get Places Data
export const getPlacesData = async (type, sw, ne) => {
  try {
    // params & headers
    const options = {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "ddf73f1d24msh682e8b2793e62f1p159c55jsn45ba03147775",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    // fetch places list
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      options
    );

    return data;
  } catch (err) {
    // Error in fetching data
    console.log(err);
  }
};

// Get Weather Data
export const getWeatherData = async (lat, lng) => {
  try {
    // params & headers
    const options = {
      params: { lon: lng, lat: lat },
      headers: {
        "X-RapidAPI-Key": "ddf73f1d24msh682e8b2793e62f1p159c55jsn45ba03147775", // Your Rapid API Key
        "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
      },
    };

    // fetch weather for a place
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/climate/month",
      options
    );

    return data;
  } catch (err) {
    // Error in fetching data
    console.log(err);
  }
};
