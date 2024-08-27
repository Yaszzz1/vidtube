import React from 'react'
import './Skeleton.css'
const Skeleton = () => {
  return (
    <div class="row">
      
        <div class="grid-row grid-4-4">
            {
                Array(8).fill(0).map((_, index) => (
                    <div class="cards">
                    <div class="card_image loading"></div>
                    <div class="card_title loading"></div>
                    <div class="card_description loading"></div>
                  </div>
                ))
            }
         
         
        </div>
 
    </div>
  )
}

export default Skeleton