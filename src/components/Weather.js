import React from 'react'
import { getThemeProps } from '@material-ui/styles'

const Weather = ({
  temperature,
  city,
  country,
  humidity,
  description,
  minTemp,
  maxTemp
}) => (
    <div className='weather__info'>
      {
        city && country &&
        <p className='weather__key'>
          Location: {city}
        </p>
      }
      {
        temperature &&
        <p className='weather__key'>
          Temperature: {temperature}ºC
        </p>
      }
      {
        description &&
        <p className='weather__key'>
          Conditions: {description}
        </p>
      }
      {
        humidity &&
        <p className='weather__key'>
          Humidity: {humidity}%
        </p>
      }
      {
        minTemp &&
        <p className='weather__key'>
          Minimum Temperature: {minTemp}ºC
        </p>
      }
      {
        maxTemp &&
        <p className='weather__key'>
          Maximum Temperature: {maxTemp}ºC
        </p>
      }
  </div>
)

export default Weather