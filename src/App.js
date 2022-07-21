import React, {useState} from 'react'

import './index.css'

function App() {

  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert('تکایە ژمارەکان بە دروستی دابنێ ')
    } else {
      let cm= height * 0.01 ;
      let bmi = (weight / ( cm * cm)  )
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 18.5) {
        setMessage('کێشت کەمە ')
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('کێشێکی گونجاوت هەیە ')
      } else {
        setMessage('کێشەکەو زۆرە مامە گیان خۆو دابەزێنە ')
      }
    }
  }

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 25) {
      imgSrc = require('../src/assets/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/healthy.png')
    } else {
      imgSrc = require('../src/assets/overweight.png')
    }
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>پێوانە کردنی کێشت بە پێی باڵا </h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>کێش  (کیلۆ)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>درێژی (سانتیمەتر)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>هەژمار کردن </button>
            <button className='btn btn-outline' onClick={reload} type='submit'>ڕیفرێش </button>
          </div>
        </form>

        <div className='center'>
          <h3>bmi ی تۆ دەکاتە : {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}

export default App;
