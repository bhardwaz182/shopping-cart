import React from "react";
import {getOffers} from '../../services/productPage';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Banners from './banners';

function Home(props) {

    const [state,setState]=React.useState({
        status:Home.LOADING,
        bannerStatus:Home.LOADING,
        products:null,
        error:null,
        banners:null
    });
    const { status,products,error} = state;
    React.useEffect( ()=>{
        getOffers()
        .then(response => {
            setState({
                ...state,
                status: Home.LOADED,
                products: response
            });
        })
        .catch(error => {
            setState({
                ...state,
                status: Home.ERROR_LOADING,
                error
            });
        });

        
    },[])
    let el;
    switch (status) {
        case Home.LOADING:
            el=<div>Please wait page is loading</div>
            break;
        case Home.LOADED:
            //console.log(produc);
            el=(
                <React.Fragment>
                    <Carousel>
                {
                    products.map((product)=>{
                        return(
                        
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={product.bannerImageUrl}
                                alt={product.bannerImageAlt}
                                />
                            </Carousel.Item>
                        );
                    })
                }
                    </Carousel>
                
                 
                </React.Fragment>
            );
            break;
        case Home.ERROR_LOADING:
            el=<div>Error occured while loading</div>
            break;
        default:
            el=null;
            break;
    }

    

    return (
            <div className="container">
                {el}
                <Banners/>
            </div>
    );
}

Home.LOADING = "LOADING";
Home.LOADED = "LOADED";
Home.ERROR_LOADING = "ERROR_LOADING";
export default Home;
