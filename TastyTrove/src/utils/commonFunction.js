import axios from 'axios';
import {filterByCategory, filterByMeal} from '../constant/constant';

const getProductByItem = searchItem => {
  let promise = [];

  promise.push(
    axios.get(`${filterByCategory}${searchItem}`).then(response => {
      if (response.data.length > 0) {
        console.log(response.data);
        return Promise.resolve(response.data.meals);
      } else {
        return axios.get(`${filterByMeal}${searchItem}`).then(response => {
          console.log(response.data);
          return Promise.resolve(response.data.meals);
        });
      }
    }),
  );

  return Promise.all(promise).then(response => {
    return response.flat();
  });
};

export {getProductByItem};
