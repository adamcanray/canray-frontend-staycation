import React from 'react'
/* fireEvent untuk menstimulati seperti 'klik' di browser(seakan-akan mengeklik object). */
import {render, fireEvent} from '@testing-library/react'
import InputNumber from './index'

/* object test */
export default class TestInput extends React.Component {
  state = {
    value: ''
  }
  handleChange =e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <InputNumber
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    )
  }
}

/* setup test */
const setup = () => {
  const { container } = render(<TestInput/>)
  const input = container.querySelector(`input.form-control[name='value']`)
  return {
    input
  }
}

/* execute test */
test('should able to change value', ()=>{
  const {input} = setup()
  /* trigger event to have value 23 */
  fireEvent.change(input, {target: {value: 23}})
  /* expect the value changed to 23 */
  expect(input.value).toBe("23")
})
test('should not able to change when reach max value', ()=>{
  const {input} = setup()
  fireEvent.change(input, {target: {value: 33}})
  /* max not adding again the value */
  expect(input.value).toBe("")
})