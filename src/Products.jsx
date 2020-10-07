import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Products = () =>{
   return (
     <>
      <div className="my-5">
       <h1 className="text-center">Our Products</h1>
       </div>
       
    <div className="Container-fluid mb-5">
     <div className="row"> 
         <div className="col-10 mx-auto ">
           <div className="row gy-4">
           {
             Sdata.map((val) =>{
               return <Card  imgsrc={val.imgsrc} title={val.title}/>
             })
           }
            </div>
          </div>
        </div>
     </div>
       
     </>


   );
};
 

export default Products; 
