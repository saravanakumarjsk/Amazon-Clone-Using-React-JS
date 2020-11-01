import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="">
            </img>

            {/* Product (id, title, price, rating, image) */}
            <div className="home__row">
                <Product
                    id='12345'
<<<<<<< HEAD
                    title='ELON MUSK - Tesla, Space X and an outer space future'
=======
                    title='ELON MUSK - Tesla, Space X, and the Quest for a Fantastic Future'
>>>>>>> 58183e6975b070f08aa397221b4b1211adfc4956
                    price={11.96}
                    rating={2}
                    image='https://images-na.ssl-images-amazon.com/images/I/5112YFsXIJL.jpg'
                />
                <Product
                    id='123456'
                    title='HP Ink jet printer - Digital edition with Wi-Fi and Bluetooth'
                    price={100}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/G/01/img16/wireless-products/content-grid/Office_products_Cat_tile_440x300.jpg'
                />
            </div>

            <div className="home__row">
                <Product
                    id='1234567'
                    title='Elgato Stream Deck - Live Content Creation Controller'
                    price={150}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/710R9YpV9nL._SL1500_.jpg'
                />
                <Product
                    id='12345678'
                    title='Apple watch series 6(GPS, wifi, ecosystem)'
                    price={300}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/71EoGntO5bL._SX466_.jpg'
                />
                <Product
                    id='123456789'
                    title='Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey'
                    price={1024.67}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg'
                />

            </div>

            <div className="home__row">
                <Product
                    id='10'
                    title='SAMSUNG 49-inch Odyssey G9 - QHD, 240hz, 1000R Curved Gaming Monitor'
                    price={15000}
                    rating={3}
                    image='https://m.media-amazon.com/images/S/aplus-media/vc/aa8788f2-82f3-456e-8f07-c295d3b7b3ab.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'
                />
                
            </div>
            
        </div>
    );
}

export default Home
