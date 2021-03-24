import axios from 'axios';

function getProducts() {
    return axios
      .get(`http://localhost:5000/products`,{ 
            headers: {
                'Accept': 'application/json'
            }
        })
      .then((response) => response.data);
}

function getOffers(){
    return axios
      .get(`http://localhost:5000/banners`,{ 
            headers: {
                'Accept': 'application/json'
            }
        })
      .then((response) => response.data);
}


function getBanner(){
    return axios
      .get(`http://localhost:5000/categories`,{ 
            headers: {
                'Accept': 'application/json'
            }
        })
      .then((response) => response.data);
}

export {
    getProducts,
    getOffers,
    getBanner
}