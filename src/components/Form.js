import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textField: {
    display: 'flex',
    margin: theme.spacing.unit,
    width: '40%'
  },
  button: {
    margin: theme.spacing.unit
  }
}))

const Form = (props) => {
  const classes = useStyles()
  const { getWeather, onInputChange } = props
  return (
    <form onSubmit={getWeather}>
      <TextField
        className={classes.textField}
        label='City Name'
        margin='normal'
        name='city'
        onChange={e => onInputChange('city', e.target.value)}
        type='search'
        variant='outlined'
        InputLabelProps={{
          required: true,
          color: 'white',
          shrink: true
        }}
      />
      <TextField
        className={classes.textField}
        label='Country Code'
        margin='normal'
        name='country'
        onChange={e => onInputChange('country', e.target.value)}
        type='search'
        variant='outlined'
        InputLabelProps={{
          required: true,
          color: 'white',
          shrink: true
        }}
      />
      <Button
        className={classes.button}
        color='primary'
        type='submit'
        variant='contained'
      >
        Get Weather
      </Button>
    </form>
  )
}

export default Form
