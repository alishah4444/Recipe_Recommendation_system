import axios from 'axios';
import key from './key';

const ajaxCall = axios.create({
  baseURL: key.REACT_APP_BASE_URL,
  timeout: 10000,
});

export const ServiceCall = async (ajaxType, url, payload = undefined) => {
  switch (ajaxType.toUpperCase()) {
    case 'GET':
      return ajaxCall
        .get(url)
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    case 'POST':
      return ajaxCall
        .post(url, payload)
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    case 'PUT':
      return ajaxCall
        .put(url, payload)
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    case 'DELETE':
      return ajaxCall
        .delete(url, payload)
        .then(response => {
          return Promise.resolve(response);
        })
        .catch(error => {
          return Promise.reject(error);
        });
    default: {
      return Promise.reject('Invalid request');
    }
  }
};

ajaxCall.interceptors.request.use(
  async config => {
    // if (isUser) {
    //   config.headers.accessToken = JSON.parse(
    //     await AsyncStorage.getItem('userInfo'),
    //   ).authToken;
    // } else if (guestUserData) {
    //   config.headers.accessToken = JSON.parse(
    //     await AsyncStorage.getItem('guestInfo'),
    //   ).authToken;
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

ajaxCall.interceptors.response.use(
  function (response) {
    try {
      //code for header

      //   if (!response.headers[constants.apiConstants.awsVersionId]) {
      //     if (response.data.status) {
      //       if (
      //         !constants.apiConstants.toastIgnoreStrings.filter(ignore =>
      //           response.data.message.includes(ignore),
      //         ).length
      //       ) {
      //       }
      //     } else {
      //     }
      //   }

      return response;
    } catch (error) {
      console.log('ajaxCall Error: ' + error);
      // return response;
    }
  },

  async function (error) {
    console.error(
      'ajaxCall Error:',
      error,
      'Method:',
      (error.response || {}).request?._method,
      'Route',
      (error.response || {}).request?._url,
    );
    let response = error.response;

    if (response && response.status === 401) {
      // await AsyncStorage.removeItem('userInfo');
    }
    if (response && response.status === 426) {
    }

    console.log(
      `ajaxCall Error: ${error} Method:${
        (error.response || {}).request?._method
      } Route ${(error.response || {}).request?._url} `,
    );

    //modal call

    return Promise.reject(error);
  },
);

export default ajaxCall;
