import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import {ThemeProvider} from '@material-ui/styles'

import {makeStyles, createMuiTheme} from '@material-ui/core/styles'
import light from '@material-ui/core/colors/purple'

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
})

const useStyles = makeStyles(themes => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: themes.spacing(1)
  }
  // label: {color: '#f5f5dca3'}
}))

function ComposedTextField(props) {
  const [labelWidth, setLabelWidth] = React.useState(0)
  const [name, setName] = React.useState(' ')
  const labelRef = React.useRef(null)
  const classes = useStyles()

  React.useEffect(() => {
    setLabelWidth(labelRef.current.offsetWidth)
  }, [])

  const handleChange = event => {
    setName(event.target.value)
  }
  console.log('two: ', props.datePicker)
  return (
    <div className={classes.container} id="calendar-form">
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel
          ref={labelRef}
          htmlFor="component-outlined"
          className={classes.label}
        >
          Event Name {props.datePicker}
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          labelWidth={labelWidth}
          className={classes.label}
        />
      </FormControl>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel
          ref={labelRef}
          htmlFor="component-outlined"
          className={classes.label}
        >
          Event Date:
        </InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          labelWidth={labelWidth}
          className={classes.label}
        />
      </FormControl>
    </div>
  )
}
export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
      <ComposedTextField />
    </ThemeProvider>
  )
}
