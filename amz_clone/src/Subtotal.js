import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'

  function Subtotal() {
      const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            {/* price */}


        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                Subtotal ({basket.length} item):
                <strong>{``}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox"/>This contains order
            </small>
            </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        
        />

            <button>check out for process</button>
        </div>
    )
}
export default Subtotal