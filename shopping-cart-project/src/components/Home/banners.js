import React from "react";
import {getBanner} from '../../services/productPage';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import './banner.css';
function Banners(props) {

    const [state,setState]=React.useState({ 
        bannerStatus:Banners.LOADING,
        error:null,
        banners:null
    });
    const { error,banners,bannerStatus} = state;
    React.useEffect( ()=>{

        getBanner()
        .then(response => {
            setState({
                ...state,
                bannerStatus: Banners.LOADED,
                banners: response
            });
        })
        .catch(error => {
            setState({
                ...state,
                bannerStatus: Banners.ERROR_LOADING,
                error
            });
        });
        
    },[])
    
    let bannerEl;

    switch (bannerStatus) {
        case Banners.LOADING:
            bannerEl=<div>Loading Offers</div>
            break;
        case Banners.LOADED:
            let idx=0;
            bannerEl=<React.Fragment>
                {
                    
                    banners.map((banner)=>{
                        if(idx%2===0){
                            if(banner.enabled){
                                idx++;
                                return(
                                    <div>
                                        <img className="banner-image" src={banner.imageUrl} alt={banner.name}/>
                                        <div className="inline banner-desc">
                                            <p>{banner.name}</p>
                                            <p>{banner.description}</p>
                                            <button className="btn btn-danger">explore {banner.key}</button>
                                        </div>
                                    </div>
                                );
                            }
                        }
                        else{
                            if(banner.enabled){
                                idx++;
                                return(
                                    <div>
                                        <div className="inline banner-desc">
                                            <p>{banner.name}</p>
                                            <p>{banner.description}</p>
                                            <button className="btn btn-danger">explore {banner.key}</button>
                                        </div>
                                        <img  className="banner-image" src={banner.imageUrl} alt={banner.name}/>
                                    </div>
                                );
                            }
                        }
                    })
                }
            </React.Fragment>
            break;
        case Banners.ERROR_LOADING:
            bannerEl=<div>Error while loading offers</div>
            break;
        default:
            break;
    }


    return (
            <div className="container">
                {bannerEl}
            </div>
    );
}

Banners.LOADING = "LOADING";
Banners.LOADED = "LOADED";
Banners.ERROR_LOADING = "ERROR_LOADING";
export default Banners;
