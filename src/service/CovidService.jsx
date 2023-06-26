import axios from "axios";

const CovidService = async (state, url) => {
  const peticion = await axios.get(url);
  state(peticion.data);
  console.log(peticion.data);
};

export default CovidService;
