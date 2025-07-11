import React from 'react'
import './Screen2.css'

export default function Screen2() {
  return (
    <div className="screen2">
         <p>Your personalized cofee</p>
        <h1>Coffe build your base</h1>

        <div className="screen2_curtain"></div>

          <button className="screen2_btnArrow">
            <i class="fa-solid fa-arrow-right"></i>
          </button>

    
        <div className="screen2_card0 screen2_card cardAbsoulte">
            <div className="card_imgContainer0 card_imgContainer">

            </div>

              <div className="card_info">
                <span className='priceSpan'>
                  <p>156.000</p>
                  <p>165.000</p>
                </span>

                <h5>Patapum Bem Bem</h5>
                <p>Lorem ipsum  dolor sit amet cons<br />adipisicing.</p>

                <span >
                  <button>Mua nay</button>
                </span>

            </div>

          </div>


        <div className="screen2_cardContainer">
          <div className="screen2_card0 screen2_card">
            <div className="card_imgContainer0 card_imgContainer">

            </div>

              <div className="card_info">
                <span className='priceSpan'>
                  <p>156.000</p>
                  <p>165.000</p>
                </span>

                <h5>Patapum Bem Bem</h5>
                <p>Lorem ipsum  dolor sit amet cons<br />adipisicing.</p>

                <span >
                  <button>Mua nay</button>
                </span>

            </div>

          </div>
          <div className="screen2_card1 screen2_card">
            <div className="card_imgContainer1 card_imgContainer">

            </div>

            <div className="card_info">
                <span className='priceSpan'>
                  <p>156.000</p>
                  <p>165.000</p>
                </span>

                <h5>Patapum Bem Bem</h5>
                <p>Lorem ipsum  dolor sit amet cons<br />adipisicing.</p>

                <span >
                  <button>Mua nay</button>
                </span>
                
            </div>
            
          </div>
          <div className="screen2_card2 screen2_card">
            <div className="card_imgContainer2 card_imgContainer">

            </div>

            <div className="card_info">
                <span className='priceSpan'>
                  <p>156.000</p>
                  <p>165.000</p>
                </span>

                <h5>Patapum Bem Bem</h5>
                <p>Lorem ipsum  dolor sit amet cons<br />adipisicing.</p>

                <span >
                  <button>Mua nay</button>
                </span>
                
            </div>
            
          </div>

        </div>
      </div>
  )
}
