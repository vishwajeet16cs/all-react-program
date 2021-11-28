import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

export default function Create() {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	/*const [checkbox, setCheckbox] = useState(false);*/

	console.log(firstName);
	console.log(lastName);

	const postData = () => {
		axios.post('https://61010a001d56e10017394d43.mockapi.io/Crud', 
			firstName,
			lastName,
			
		)
	};

	return(
		<div>
		  <Form>
		    <Form.Field>
		      <label>First Name</label>
		      <input 
		      name="fname"
		      placeholder='First Name'
		      onChange = {(e)=> setFirstName(e.target.value)}
		       />
		    </Form.Field>
		    <Form.Field>
		      <label>Last Name</label>
		      <input name="lname"
		       placeholder='Last Name'
		       onChange = {(e)=> setLastName(e.target.value)}
		        />
		    </Form.Field>
		{/*    <Form.Field>
                    <Checkbox 
                    label='I agree to the Terms and Conditions' 
                    onChange={(e) => setCheckbox(!checkbox)} />
             </Form.Field>*/}
		    <Button  onClick={postData} type='submit'>Submit</Button>
		  </Form>
  	</div>
)

}