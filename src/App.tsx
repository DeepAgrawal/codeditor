import React from 'react'
import './App.scss'

const App = () => {
  return (
    <div className='App'>
      <div className='file-explorer'></div>
      <div className='right-pane'>
        <div className='code-editor-pane'>
          <div className='file-name'></div>
          <div className='code-editor'></div>
        </div>
        <div className='live-view'></div>
      </div>
    </div>
  )
}

export default App
