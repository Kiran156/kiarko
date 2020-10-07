import React, { useState } from 'react';

const Contact = () =>{

  const [data,setData]=useState({
        fname:'',
        email:'',
        cnt:'',
        altcnt:'',
        addr:'',
        addr2:'',
        city:'',
        zip:'',
        msg:''
  });

  const InputEvent = (event) =>{
        const {name,value}=event.target;
        setData((preVal) =>{
          return {
              ...preVal,
              [name]:value, 
          }

        });
        
        
  };

  const formSubmit = (e) =>{
      e.preventDefault();
      alert(`My name is ${data.fname}. email id is ${data.email}.contact no is ${data.cnt} and Alt no is ${data.altcnt}.address ${data.addr} ${data.addr2} and i belongs to ${data.city} pincode is ${data.pin}. message: ${data.msg}`);
  };
   return (
     <>
      <div className="my-5">
       <h1 className="text-center">Contact Us</h1>
       </div>

       <div className="Container contact_div">
         <div className="row"> 
          <div className="col-md-6 col-10 mx-auto ">
          <form onSubmit={formSubmit}>
  <div className="row my-2">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Full Name</label>
      <input type="text" className="form-control" name="fname" value={data.fname} onChange={InputEvent} placeholder="Full name" id="inputEmail4"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Email</label>
      <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="abc@xyz.com" id="inputPassword4"/>
    </div>
  </div>

  <div className="row my-2">
    <div className="form-group col-md-6">
      <label for="inputEmail4">contact number</label>
      <input type="text" className="form-control" name="cnt" value={data.cnt} onChange={InputEvent} placeholder="enter 10 digits" id="inputEmail4"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputEmail4">Alternate contact number</label>
      <input type="text" className="form-control" name="altcnt" value={data.altcnt} onChange={InputEvent} placeholder="enter 10 digits" id="inputEmail4"/>
    </div>
  </div>

  <div className="form-group my-2">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" name="addr" value={data.addr} onChange={InputEvent} id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group my-2">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" name="addr2" value={data.addr2} onChange={InputEvent} id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="row my-2">
    <div className="form-group col-md-10">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" name="city" value={data.city} onChange={InputEvent} id="inputCity"/>
    </div>
    
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" name="zip" value={data.zip} onChange={InputEvent} id="inputZip"/>
    </div>
  </div>

  <div class="form-group my-2">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} placeholder="...messege" rows="3"></textarea>
  </div>
 
  <button type="submit"  className="btn btn-primary mt-5">Submit</button>
</form>
          
           </div>
         </div>
       </div>
     </>


   );
};
 

export default Contact; 
