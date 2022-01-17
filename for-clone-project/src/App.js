import React from 'react'
import Formic from './Component/Formic'
import "./App.css"
const App = () => {
  return (
    <div >
      <div className='container'>
            <div className="row">
                <div className="col-md-4">
                <Formic/>
                </div>
                <div className="col-md-4">
                    <img src="https://media.istockphoto.com/photos/fingerprint-biometric-authentication-button-digital-security-concept-picture-id1299730469" className='img-fluid w-100'  alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default App
