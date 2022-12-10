import React,{ useEffect,useState } from "react";
import "./style.css";
import {MOCK_DATA} from './MOCK_DATA/output';

export default function App() {
  const[toggle,setToggle]=useState(false);
  const[toggle1,setToggle1]=useState(false);
 
  const setT=()=>{
    setToggle1(false);
    setToggle(!toggle);
  }
  const setT2=()=>{
    setToggle(false);
    setToggle1(!toggle1);
  }
  const sortAse=()=>{
    MOCK_DATA.sort(function(a, b){return a.id-b.id});
    setToggle(false);
  }
  const sortDese=()=>{
    MOCK_DATA.sort(function(a, b){return b.id-a.id});
    setToggle(false);
  }

  const sortNameAse=()=>{
    MOCK_DATA.sort(function(a, b) {
      const nameA = a.first_name;
      const nameB = b.first_name; 
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setToggle1(false);
  }
  const sortNameDese=()=>{
    MOCK_DATA.sort(function(a, b) {
      const nameA = a.first_name; 
      const nameB = b.first_name; 
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    setToggle1(false)
  }
 
  return (
    <div className='main'>
      <table>
        <tbody>
          <tr>
            <th className='pos-rel d-flex align-center justify-content-between'> <span>ID</span> 
            <span><button className='btn' onClick={setT}>:</button></span>
            {toggle && 
             <div className='selector pos-abs'>
              <ul className='selector-ul'>
                <li className='selector-li'><button className='selector-btn' disabled>UnSort</button></li>
                <li className='selector-li'><button className='selector-btn' onClick={sortAse}>Sort ASE</button></li>
                <li className='selector-li'><button className='selector-btn' onClick={sortDese}>Sort DESE</button></li>
              </ul>
             </div>}
             </th>

             <th  className='pos-rel'><span>First Name</span> 
            <span><button className='btn' onClick={setT2}>:</button></span>
            {toggle1 && 
             <div className='selector pos-abs'>
              <ul className='selector-ul'>
                <li className='selector-li'><button className='selector-btn' disabled>UnSort</button></li>
                <li className='selector-li'><button className='selector-btn' onClick={sortNameAse}>Sort ASE</button></li>
                <li className='selector-li'><button className='selector-btn' onClick={sortNameDese}>Sort DESE</button></li>
              </ul>
             </div>}
             </th>
            <th>Last name</th>
          </tr>
          {MOCK_DATA.map(X=>{
          return(
          <tr>
            <td>{X.id}</td>
            <td>{X.first_name}</td>
            <td>{X.last_name}</td>
          </tr>
            )
          })}
        </tbody>
      </table>
      {toggle&&<p>onClick</p>}
    </div>
  );
}
