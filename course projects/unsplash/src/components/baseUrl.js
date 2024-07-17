import axios from "axios";

const unsplashCustomInstance = axios.create({
  baseUrl:
    "https://api.unsplash.com/search/photos/?client_id=7AR_4GvLjjKtz_4PuAIBDN0mKwZOGuleNMaSWjStQ4U&query=quokka",
  headers: {
    Accept: "application/JSON",
  },
});

export default unsplashCustomInstance;
