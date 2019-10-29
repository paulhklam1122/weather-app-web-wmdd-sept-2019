import React from 'react'

const Weather = (props) => (
  <div className='weather__info'>
    <p className='weather__key'>
      Location: Vancouver
    </p>
    <p className='weather__key'>
      Temperature: 30
    </p>
    <p className='weather__key'>
      Conditions: Rainy
    </p>
    <p className='weather__key'>
      Humidity: 30%
    </p>
    <p className='weather__key'>
      Minimum Temperature: -3
    </p>
    <p className='weather__key'>
      Maximum Temperature: 40
    </p>
  </div>
)

export default Weather