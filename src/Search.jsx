import React, {useState,Component} from 'react';
import Data from './Data';
import { Button} from 'react-bootstrap';
import {BrowserRouter, Router} from "react-router-dom";
import {Switch, Link, Route} from 'react-router-dom';
import Navbar from './Navbar'

//  function Mountains(){
//   var hi = "Mountain";
// 	document.getElementById("m").value = hi;
// }
const Search = () => {
  const [filter, setFilter] = useState('Mountain');
  const searchText =(event)=>{
    if(searchText === " ")
    { 
   dataSearch= []
    }
    else{
      setFilter(event.target.value);
    }

  }

  let dataSearch = Data.cardData.filter(item=>{
    return Object.keys(item).some(key=>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
      )

  });
  console.warn(filter)
    return (
    <>
      < Navbar />
      <div id="full">
      <section className="py-4 container" >
        <div className="row justify-content-center">

          <div className="col-12 mb-5" >
            <div className="mb-3 col-4 mx-auto text-center">
              <h1 className="text">THE REACT SEARCH</h1>
              <input type="text" onChange={searchText.bind(this)} className="form-control"  defaultValue="Mountain"/>
            </div>
       
            <p>
           <Button variant="info" id="m" className="sbuttons" onClick={()=>setFilter('Mountain')}>MOUNTAINS</Button>
           <Button variant="info" id="be" className="sbuttons" onClick={()=>setFilter('Beach')}>BEACHES</Button>
           <Button variant="info" id="bi" className="sbuttons" onClick={()=>setFilter('Bird')}>BIRDS</Button>
           <Button variant="info" id="fd" className="sbuttons" onClick={()=>setFilter('Food')}>FOOD</Button>
          </p>
          </div>
          
          
     
            {dataSearch.map((item,index)=>{
          
              return(
                <>
             
                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" id="full">    
                  <div className="card p-0 overflow-hidden h-100 shadow" id="pics">
                    <img src={item.img} className="card-img-top" />
                    <p align="center" >{item.description}</p>
                 
                  </div>
                </div>
                </>
              )
            })}
        </div>
      </section>
   
      </div>
    </>
    )
}

export default Search;