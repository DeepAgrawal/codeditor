import React from 'react'
import './App.scss'

// components
import CodeEditor from './components/CodeEditor'
import FileExplorer from './components/FileExplorer'
import Errors from './components/Errors'
import LiveView from './components/LiveView'

// hook
import useLocalStorage from './hooks/useLocalStorage'

const App = () => {
  const [selectedFile, setSelectedFile] = React.useState<string>('index.js')
  const [htmlCode, setHtmlCode] = useLocalStorage('codeditor-html', ``)
  const [cssCode, setCssCode] = useLocalStorage('codeditor-css', ``)
  const [jsCode, setJsCode] = useLocalStorage('codeditor-js', ``)
  const [srcCode, setSrcCode] = React.useState<string>('')
  const [errors, setErrors] = React.useState<any[]>([])
  const [collapsedEditor, setCollapsedEditor] = React.useState<boolean>(false)

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
      </html>
    `)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [htmlCode, cssCode, jsCode, errors.length])

  return (
    <div className='App'>
      <FileExplorer setSelectedFile={setSelectedFile} />
      <div className='right-pane'>
        <div className='code-editor-pane'>
          <div
            onClick={() => setCollapsedEditor(!collapsedEditor)}
            className='file-name'
          >
            {selectedFile === 'index.html' && 'HTML'}
            {selectedFile === 'index.css' && 'CSS'}
            {selectedFile === 'index.js' && 'JS'}
          </div>
          <div className={collapsedEditor ? 'code-editor' : 'code-editor big'}>
            <CodeEditor
              selectedFile={selectedFile}
              setHtmlCode={setHtmlCode}
              setCssCode={setCssCode}
              setJsCode={setJsCode}
              setErrors={setErrors}
              htmlCode={htmlCode}
              cssCode={cssCode}
              jsCode={jsCode}
            />
          </div>
        </div>
        <div className={collapsedEditor ? 'live-view' : 'live-view small'}>
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
