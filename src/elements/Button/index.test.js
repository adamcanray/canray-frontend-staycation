import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Button from './index'

/* do test if isDisabled is present */
test("Should not allowed click button if isDisabled is present", () => {
  /* get container from func */ 
  /* representasikan penggunaannya */
  const {container} = render(<Button isDisabled></Button>)
  /* expentation, check container.
  check component have tag span and classname disabled,
  and make sure the tag exist in the document.
  */
 // console.log(container)
 // expect(container.querySelector('span.disabled')).toBeInTheDocument()
 /* mengekpresikan hasil yang diharapkan, jika sesuai maka test passed */
  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})
/* do test if ... */
test("Should render Loading/Spinner", () => {
  const {container, getByText} = render(<Button isLoading></Button>)
  /* '/loading/' is regex/regularExpression, means i case-insensitive("Adam" is equal to "adam") */ 
  expect(getByText(/loading/i)).toBeInTheDocument()
  expect(container.querySelector('span')).toBeInTheDocument()
})
/* do test if ... */
test("Should render <a> tag", () => {
  const {container} = render(<Button type="link" isExternal></Button>)
  expect(container.querySelector('a')).toBeInTheDocument()
})
/* do test if ... */
test("Should render <Link> component", () => {
  const {container} = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  )
  expect(container.querySelector('a')).toBeInTheDocument()
})