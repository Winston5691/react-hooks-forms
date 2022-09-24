import React, { useState } from 'react'

function Form() {
  const [firstName, setFirstName] = useState('John')
  const [lastName, setLastName] = useState('Henry')

  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }

  return (
    <form>
      <input type='text' value={firstName} onChange={handleFirstNameChange} />
      <input type='text' value={lastName} onChange={handleLastNameChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form