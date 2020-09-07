import React from 'react'
import { 
  InputDate,
  // InputNumber,
} from 'elements/Form'
import Breadcrumb from 'elements/Breadcrumb'
// import Stepper from 'elements/Stepper'

export default class TestInput extends React.Component {
  state = {
    // value: '1'
    /* format bawaan react-date-range */
    value: {
      startDate: new Date(),  
      endDate: new Date(),
      key: 'selection'
    }
  }
  handleChange =e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const breadcrumbList = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ]
    return (
      <div className="container">
        <div className="row align-items-center justify-content-center" style={{height: '100vh'}}>
          <div className="col-auto">
            <Breadcrumb data={breadcrumbList} />
            {/* <InputNumber
              max={30}
              onChange={this.handleChange}
              suffix=" night"
              isSuffixPlural
              name="value"
              value={this.state.value}
            /> */}
            <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
            {/* <Stepper>ok</Stepper> */}
          </div>
        </div>
      </div>
    )
  }
}