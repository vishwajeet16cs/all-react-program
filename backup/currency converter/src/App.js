import CurrencyRow from "./CurrencyRow";
import React,{useEffect, useState} from "react";
import "./App.css"
const BASE_URL="http://api.exchangeratesapi.io/v1/latest?access_key=a1f669702564872c8049125cb8e078d0";
const App=()=>{
  const [currencyOptions,setCurrencyOptions] = useState([])
  const [fromCurrency,setFromCurrency]= useState();
  const [toCurrency,setToCurrency]= useState();
  const [exchangeRate,setExchangerate] =useState();
  const [amount,setAmount] = useState(1);
  const [amountInFromCurrenct,setAmountInFromCurrenct] = useState(true)
  let toAmount,fromAmount 
  if(amountInFromCurrenct){
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  }else{
    toAmount = amount;
    fromAmount = amount/exchangeRate;
  }
  console.log(exchangeRate);
  console.log(currencyOptions)
  useEffect(()=>{
    fetch(BASE_URL)
    .then(res=>res.json())
    .then(data=>{
      const firstcurrency = Object.keys(data.rates)[1]
      setCurrencyOptions([data.base,... Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstcurrency)
      setExchangerate(data.rates[firstcurrency])

    })
  },[])
  function handleFromAmountChange(e){
      setAmount(e.target.value);
      setAmountInFromCurrenct(true)
  }
  function handleToAmountChange(e){
      setAmount(e.target.value);
      setAmountInFromCurrenct(false)
  }

  return (
    <>
    <h1>hello check</h1>
    <CurrencyRow
      currencyOptions={currencyOptions}
      selectedCurrency={fromCurrency}
      onChangeCurrency={e=>setFromCurrency(e.target.value)}
      amount={fromAmount}
      onChangeAmount={handleFromAmountChange}
      />
    <div className="equals">=</div>
    <CurrencyRow
      currencyOptions={currencyOptions}
      onChangeCurrency={e=>setToCurrency(e.target.value)}
      onChangeAmount={handleToAmountChange}
      selectedCurrency={toCurrency}
      amount={toAmount}/>
    </>
  )
}
export default App