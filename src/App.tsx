import React from 'react'
import './App.scss'

// components
import CodeEditor from './components/CodeEditor'

// assets
import HTML from './assets/html-icon.png'
import CSS from './assets/css-icon.png'
import JS from './assets/js-icon.png'

const App = () => {
  return (
    <div className='App'>
      <div className='file-explorer'>
        <div className='file-explorer-header'>EXPLORER</div>
        <div className='files'>
          <div className='file'>
            <img className='file-icon' src={HTML} alt='index.html' />
            <span className='file-name'>index.html</span>
          </div>
          <div className='file'>
            <img className='file-icon' src={CSS} alt='index.css' />
            <span className='file-name'>index.css</span>
          </div>
          <div className='file'>
            <img className='file-icon' src={JS} alt='index.js' />
            <span className='file-name'>index.js</span>
          </div>
        </div>
      </div>
      <div className='right-pane'>
        <div className='code-editor-pane'>
          <div className='file-name'>HTML</div>
          <div className='code-editor'>
            <CodeEditor />
          </div>
        </div>
        <div className='live-view'>
          <iframe
            title='web-view'
            sandbox='allow-scripts'
            frameBorder='0'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    </div>
  )
}

export default App
