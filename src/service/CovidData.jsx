import { useEffect } from 'react';
import axios from 'axios';

const CovidData = (props) => {
  const fetchData = () => {
    axios
      .get(`https://disease.sh/v3/covid-19/${props.url}`)
      .then((response) => {
        console.log(response.data[props.country][props.datos]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [props.url]);


};



export default CovidData
