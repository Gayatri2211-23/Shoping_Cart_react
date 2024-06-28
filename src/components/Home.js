import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import WebService from "../services/WebService";
import WebApi from "../services/WebApi";
import { addProductData } from "../redux/Slice";

function Home(){

    const [productData,setproductdata]=useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{loadProductData();},[])

    var loadProductData = async()=>{
        const response = await WebService.getProductAPI(WebApi.productAPI);
        console.log("response is : "+response);
        console.log("string response is : "+JSON.stringify(response));
        var resp=response.data;
        setproductdata(resp.products)
    }

    return<div className="container-fluid mt-5">
       <div className="row mt-5"><br/><br/><br/><br/>
       {productData.map((obj)=>{
           return<div className="col-md-4 border border-3">
              <div className="well row mt-5 mb-5"><br/><br/>
                 <div className="col-md-5"><div className="img-responsive">
                <img src={obj.thumbnail} height={200} width={150} 
                alt="Not Found" className="img-rounded"/>
                </div></div>
                 <div className="col-md-7"> <div>
                <b>Name : {obj.title}</b><br/>
                <b>Brand : {obj.brand}</b><br/>
                <b>category : {obj.category}</b><br/>
                <b>Price : {obj.price}</b><br/>
                <b>Discount : {obj.discountPercentage}%</b><br/>
                <b>Rating : {obj.rating}</b><br/><br/>
                <button className="btn btn-primary" onClick={()=>dispatch(addProductData(obj))}>Add to Cart</button>
              </div></div>
                
               
              </div>
           </div>
       })}       
     </div>
    </div>
}
export default Home;