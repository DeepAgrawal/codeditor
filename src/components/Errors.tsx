import React from 'react'

interface ErrorsInt {
  errors: any[]
}

const Errors: React.FC<ErrorsInt> = ({ errors }) => {
  return (
    <div className='errors-container'>
      <div className='failed-header'>Failed to compile</div>
      <ul className='errors'>
        {errors.map((error, index) => (
          <li className='error' key={index}>
            Line {error.endLineNumber} | {'  ' + error.message}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Errors
