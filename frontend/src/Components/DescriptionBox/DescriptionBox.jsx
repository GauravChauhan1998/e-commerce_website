import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            {/* <div className="descriptionbox-nav-box fade">Reviews (122)</div> */}
        </div>
        <div className="descriptionbox-description">
            <p>
                SHOPSY, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. 
                Fashion trends seem to change at lightning speed, yet the Shopsy shopping app has managed to keep up without any hiccups. 
                In addition, Shopsy has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The Shopsy Insider. 
                Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the Shopsy app. 
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox