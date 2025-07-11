import React from 'react';
import './App.css';
import Screen1 from './Screen1.jsx';
import Screen2 from './Screen2.jsx';
import Screen3 from './Screen3.jsx';

export default function App() {
   axios.get(`https://rickandmortyapi.com/api/character/?page=${1}`)
   .then(res => {
    console.log(res)
   })
  
  return (
    <div className="wrap">
      <Screen1 />
      <Screen2 />
      <Screen3 />
    </div>
  )
}
