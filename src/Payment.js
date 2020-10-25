import React, { useState } from 'react'
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState("false");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = async event => {
        // do all the fancy stripe stuff here 

    }

    const handleChange = event => {
        // listen for any changes in the card and display any errors 
        // as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            {/* payment section - delivery address */}
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">
                        {basket?.length} items
                        </Link>
                    )
                </h1>

                <div className="payment__section">

                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>Los Angeles, CA</p>
                    </div>

                </div>

                {/* payment section - review items */}
                <div className="payment__section">

                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>

                {/* payment section - payment method */}
                <div className="payment__section">

                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>

                    <div className="payment__details">
                        {/* create a form for payment processing */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    deciamalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandsSeparator={true}
                                prefix={"$"}
                                 />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                                    {error && <div>{error}</div>}
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment
