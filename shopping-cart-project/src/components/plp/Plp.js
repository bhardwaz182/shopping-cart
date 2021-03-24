import React, { Component } from 'react';
import { getProducts } from '../../services/productPage';



import 'bootstrap/dist/css/bootstrap.css';

import './Plp.css';

class Plp extends Component{

    static LOADING = "LOADING";
    static LOADED = "LOADED";
    static ERROR_LOADING = "ERROR_LOADING";

    state={
        status:Plp.LOADING,
        products:null
    }

    componentDidMount(){

        getProducts()
      .then((prodcuts) => {
        this.setState({
          status: Plp.LOADED,
          prodcuts
        });
      })
      .catch((error) => {
        this.setState({
          status: Plp.ERROR_LOADING,
          error
        });
      });
    }

    filterProducts=async (id)=>{
        //const {status,products}=this.state;
        //let filProd=[];
        const products=await getProducts();
        //console.log(products);
        let filProd=products.filter((product)=>id===product.category)
        this.setState({
            prodcuts:filProd
        });
        
    }


    render(){
        let el;
        const {prodcuts}=this.state;
        switch (this.state.status) {
            case Plp.LOADING:
                el=<div>Products are loading</div>
                break;
            case Plp.LOADED:
                el=(
                    
                        <div className="row">
                            {
                            prodcuts.map((product)=>(
                                <div className="col-sm-12 col-md-6 col-lg-3" key={product.id}>
                                    <p>{product.name}</p>
                                        <div className="row">
                                            <div className="col-6 col-md-6 col-lg-12">
                                                <img className="product-image" src={product.imageURL} alt="kiwi" />
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-12">
                                                <p className="card-text">{product.description}</p>
                                                <button className="btn btn-danger">Buy Now @ {product.price}</button>
                                            </div>
                                        </div>
                                </div>
                            ))}  
                        </div>
                    
                );
                break;

            case Plp.ERROR_LOADING:
                el=(<div>There is error while loading products</div>)
                break;
            default:
                break;
        }

        return(
            
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-2 product-cat">
                            <ul>
                                <li onClick={()=>this.filterProducts("5b6899953d1a866534f516e2")}>Fruits and vegetables</li>
                                <li onClick={()=>this.filterProducts("5b6899123d1a866534f516de")}>Bakery Cakes and Diary</li>
                                <li onClick={()=>this.filterProducts("5b675e5e5936635728f9fc30")}>Beverages</li>
                                <li onClick={()=>this.filterProducts("5b68994e3d1a866534f516df")}>Beauty and Hygine</li>
                                <li onClick={()=>this.filterProducts("5b6899683d1a866534f516e0")}>Baby and care</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-10 col-lg-10">
                            {el}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Plp;