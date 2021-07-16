import React from 'react'
import './App.scss'

// components
import CodeEditor from './components/CodeEditor'

// assets
import HTML from './assets/html-icon.png'
import CSS from './assets/css-icon.png'
import JS from './assets/js-icon.png'

const App = () => {
  const [selectedFile, setSelectedFile] = React.useState<string>('index.js')
  const [htmlCode, setHtmlCode] = React.useState<string>(
    `<!-- write some HTML here -->`
  )
  const [cssCode, setCssCode] = React.useState<string>(
    `/* write some CSS here */`
  )
  const [jsCode, setJsCode] = React.useState<string>(`// write some JS here`)
  const [srcCode, setSrcCode] = React.useState<string>('')

  React.useEffect(() => {
    setSrcCode(`
      <html>
        <body>${htmlCode}</body>
        <style>${cssCode}</style>
        <script>${jsCode}</script>
    `)
  }, [htmlCode, cssCode, jsCode])

  return (
    <div className='App'>
      <div className='file-explorer'>
        <div className='file-explorer-header'>EXPLORER</div>
        <div className='files'>
          <div onClick={() => setSelectedFile('index.html')} className='file'>
            <img className='file-icon' src={HTML} alt='index.html' />
            <span className='file-name'>index.html</span>
          </div>
          <div onClick={() => setSelectedFile('index.css')} className='file'>
            <img className='file-icon' src={CSS} alt='index.css' />
            <span className='file-name'>index.css</span>
          </div>
          <div onClick={() => setSelectedFile('index.js')} className='file'>
            <img className='file-icon' src={JS} alt='index.js' />
            <span className='file-name'>index.js</span>
          </div>
        </div>
      </div>
      <div className='right-pane'>
        <div className='code-editor-pane'>
          <div className='file-name'>
            {selectedFile === 'index.html' && 'HTML'}
            {selectedFile === 'index.css' && 'CSS'}
            {selectedFile === 'index.js' && 'JS'}
          </div>
          <div className='code-editor'>
            <CodeEditor
              selectedFile={selectedFile}
              setHtmlCode={setHtmlCode}
              setCssCode={setCssCode}
              setJsCode={setJsCode}
            />
          </div>
        </div>
        <div className='live-view'>
          <iframe
            srcDoc={srcCode}
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
