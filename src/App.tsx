import React from 'react'
import './App.scss'

// components
import CodeEditor from './components/CodeEditor'
import FileExplorer from './components/FileExplorer'
import Errors from './components/Errors'
import LiveView from './components/LiveView'

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
  const [errors, setErrors] = React.useState<any[]>([])

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (errors.length !== 0) {
        return
      }
      setSrcCode(`
      <html>
        <body>${htmlCode}</body>
        <style>${cssCode}</style>
        <script>${jsCode}</script>
    `)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [htmlCode, cssCode, jsCode, errors.length])

  return (
    <div className='App'>
      <FileExplorer setSelectedFile={setSelectedFile} />
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
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className='live-view'>
          {errors.length === 0 ? (
            <LiveView srcCode={srcCode} />
          ) : (
            <Errors errors={errors} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
