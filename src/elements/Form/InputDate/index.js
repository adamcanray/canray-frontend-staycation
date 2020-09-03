import React, { useState, useRef, useEffect } from 'react'
import propTypes from 'prop-types'

import {DateRange} from 'react-date-range' /* need 'npm i date-fns' */

import './index.scss'
import 'react-date-range/dist/styles.css' // main css
import 'react-date-range/dist/theme/default.css' // theme css

import formatDate from 'utils/formatDate'
import iconCalendar from 'assets/images/icons/icon-calendar.svg'

export default function Date(props) {
  const { value, placeholder, name } = props
  const [isShowed, setIsShowed ] = useState(false)
  const datePickerChange = value => {
    /* hijack from parent */
    const target = {
      target: {
        value: value.selection,
        name: name
      }
    }
    props.onChange(target)
  }
  useEffect(()=>{
    /* ketika DOM di load */
    /* listener for listen mouse clicked outside calendar 'object' */
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      /* ketika DOM sudah tidak di load */
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
  /* create Ref */
  const refDate = useRef(null)
  const handleClickOutside = event => {
    /* wait until Ref is available in DOM */
    if(refDate && refDate.current.contains(event.taget)){
      setIsShowed(false)
    }
  }
  const check = focus => {
    /*if focus is not exits, then set isShowed to false  */
    focus.indexOf(1) < 0 && setIsShowed(false)
  }
  const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${value.endDate ? ' - ' + formatDate(value.endDate) : ''}`

  return (
    <div ref={refDate} className={['input-date mb-3', props.outerClassName].join(' ')}>
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <span className="input-group-text">
            <img src={iconCalendar} alt="icon calendar"/>
          </span>
        </div>
        <input 
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={ () => setIsShowed(!isShowed) } 
        />
        {isShowed&&(
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  )
}

Date.propTypes = {
  value: propTypes.object,
  name: propTypes.string,
  onChange: propTypes.func,
  placeholer: propTypes.string,
  outerClassName: propTypes.string,
}