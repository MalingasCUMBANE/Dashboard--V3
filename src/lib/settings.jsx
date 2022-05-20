import axios from 'axios';
import * as env from './env';

// Url to our api
export const baseurl = axios.create({
  baseURL: 'https://silicaapi.atendimento.co.mz/'
  // baseURL: 'http://127.0.0.1:9000/'
});

const apirequest = axios.create({
  baseURL: 'https://silicaapi.atendimento.co.mz/'
  // baseURL: 'http://127.0.0.1:9000/'
});

baseurl.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // config.headers.Authorization =  `Token 3668a2bc1b9b577806f401567d4370fe347d55944042f2db85c7d4ebfd8a7665`;
  if (token != null) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

apirequest.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log('Here my token', JSON.parse(token));
  // config.headers.Authorization =  `Token 3668a2bc1b9b577806f401567d4370fe347d55944042f2db85c7d4ebfd8a7665`;
  if (token != null) {
    config.headers.Authorization = `Token ${JSON.parse(token)}`;
  }

  return config;
});

// baseurl.interceptors.response.use(
//   function (response) {
//     // if(response.status == 401){
//     //     console.log("Por favor faca o login")
//     //     alert("Por favor faca o login")
//     // }

//     return response;
//   }

//   // baseurl.interceptors = (response => {
//   //     // baseurl.interceptors.request.use(
//   //     //     (conf)=> {
//   //     //         return conf
//   //     //     },

//   //     //     //Aqui
//   //     //     (error) => {
//   //     //         console.log("Por favor faca o login", error.message)
//   //     //         alert("Por favor faca o login", error.message)
//   //     //         // You can handle error here and trigger warning message without get in the code inside
//   //     //         response.dispatch({
//   //     //         type: env.actionsTypes.openModal,
//   //     //         message: error.message,
//   //     //         });
//   //     //         return Promise.reject(error);
//   //     //     }
//   //     // )
//   // }
//   // )
// );
export default apirequest;
