import axios from "axios";

const service = axios.create({
  baseURL: "https://swapi.co/api/starships"
});

export default {
  service: service,

  // route to get all starships
  getStarships() {
    return service.get("/").then(res => res.data.results);
  },

  // route to get one starship
  getOneStarship(name) {
    return service
      .get("/")
      .then(res => res.data.results.filter(starship => starship.name === name));
  }
};
