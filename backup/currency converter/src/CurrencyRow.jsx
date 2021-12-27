import React from 'react'

const CurrencyRow = (props) => {
    const {currencyOptions,selectedCurrency,onChangeCurrency,amount,onChangeAmount} = props
    return (
        <div>
            {/* <h6>data as props{JSON.stringify(currencyOptions)}</h6> */}
            {/*<h1>hello from currency flile</h1> */}
            <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map((ele,index)=>{
                    
                   return <option key={ele} value={ele}>{ele}</option>

                })}
            </select>
        </div>
    )
}

export default CurrencyRow
