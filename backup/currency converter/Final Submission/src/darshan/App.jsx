
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import '../App.css';

function App() {

// Initializing all the state variables
const [info, setInfo] = useState([]);
const [input, setInput] = useState(0);
const [from, setFrom] = useState("usd");
const [to, setTo] = useState("inr");
const [to1, setTo1] = useState("usd");
const [to2, setTo2] = useState("ada");
const [to3, setTo3] = useState("amd");
const [options, setOptions] = useState([]);
const [output, setOutput] = useState(0);

const [output1, setOutput1] = useState(0);
const [output2, setOutput2] = useState(0);
const [output3, setOutput3] = useState(0);

useEffect(() => {
	Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
.then((res) => {
	setInfo(res.data[from]);
	})
}, [from]);

useEffect(() => {
	setOptions(Object.keys(info));
	convert();
}, [info])
function convert() {
	var rate = info[to];
	setOutput(input * rate);
	var rate1= info[to1]
	setOutput1(input * rate1);
	var rate2=info[to2]
	setOutput2(input * rate2);
	var rate3=info[to3]
	setOutput3(input * rate3);
}
function flip() {
	var temp = from;
	setFrom(to);
	setTo(temp);
}

return (
	<div className="App">
    {/* <pre>{JSON.stringify(info)}</pre> */}
	<div className="heading">
		<h1>Currency converter</h1>
	</div>
	<div >
		<div className="left">
		<h3>Amount</h3>
		<input type="text"
			placeholder="Enter the amount"
			onChange={(e) => setInput(e.target.value)} />
		</div>
		<div>
		<h3>From</h3>
		<Dropdown options={options}
					onChange={(e) => { setFrom(e.value) }}
		value={from} placeholder="From" />
		</div>
		<div>
		<HiSwitchHorizontal size="30px"
						onClick={() => { flip()}}/>
		</div>
		<div>
		<h3>To</h3>
		
		</div>
	</div>
	<div>
		<button onClick={()=>{convert()}}>Convert</button>
		<h2>Converted Amount:</h2>
		<p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
		<p>{input+" "+from+" = "+output1.toFixed(2) + " " + to1}</p>
		<p>{input+" "+from+" = "+output2.toFixed(2) + " " + to2}</p>
		<p>{input+" "+from+" = "+output3.toFixed(2) + " " + to3}</p>

	</div>
	</div>
);
}

export default App;
