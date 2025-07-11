import React from 'react'
import './Screen3.css'

export default function Screen3() {
  return (
    <div className="screen3">
      <div className="rowLes">
        <h1>YOUR</h1>
        <h1 className="pers">PERSONALIZED</h1>
        <h1>COFFE</h1>
      </div>
      <div className="row">
        <div className="playBtn">
          <i class="fa-solid fa-play"></i>
        </div>
      </div>
      <div className="rowLes nav">
         <div className="trolleyContainer">
          <i class="fa-solid fa-cart-shopping"></i>
          <div className="trolleyCount">0</div>
         </div>
         
         <ul>
          <li><h3>papавфіа</h3></li>
          <li>pap bib bib</li>
          <li>pap buka</li>
          <li>pap pepka</li>
          <li>pap bam</li>
          <li>pap bim</li>

        </ul>
      </div>
       
    </div>
  )
}
