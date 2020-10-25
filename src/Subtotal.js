import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer"
import { useHistory } from "react-router-dom";

function Subtotal() {

    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            {/* price */}
            <CurrencyFormat

                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />The order contains a gift
                        </small>
                    </>
                )}

                deciamalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => history.push('./payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
