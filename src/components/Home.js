import React from 'react'

function Home(props) {
    //console.log(props)
    return (
        <div>
           
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div>
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>&nbsp;
                    <button 
                    onClick={
                        ()=>{props.removeFromCartHandler()}
                        }>
                        Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home
