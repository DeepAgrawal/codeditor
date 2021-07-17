import React from 'react'
import './App.scss'

// components
import CodeEditor from './components/CodeEditor'
import FileExplorer from './components/FileExplorer'
import Errors from './components/Errors'
import LiveView from './components/LiveView'

// hook
import useLocalStorage from './hooks/useLocalStorage'

//assets
import HTML from './assets/html-icon.png'
import CSS from './assets/css-icon.png'
import JS from './assets/js-icon.png'
import Toggle from './assets/collapse.svg'
import axios from 'axios'

const JSCode = `// Code some JS`
const CSSCode = `h1 {
  color: rgb(0, 122, 204);
  text-align: center;
}`
const HTMLCode = `<!-- Start writing HTML (no need of html and body tags) -->
<h1>
    Welome !!!
</h1>`

const App = () => {
  const [selectedFile, setSelectedFile] = React.useState<string>('index.html')
  const [htmlCode, setHtmlCode] = useLocalStorage('codeditor-html', HTMLCode)
  const [cssCode, setCssCode] = useLocalStorage('codeditor-css', CSSCode)
  const [jsCode, setJsCode] = useLocalStorage('codeditor-js', JSCode)
  const [srcCode, setSrcCode] = React.useState<string>('')
  const [errors, setErrors] = React.useState<any[]>([])
  const [collapsedEditor, setCollapsedEditor] = React.useState<boolean>(false)
  const [shareLink, setShareLink] = React.useState<string | null>(null)

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

  React.useEffect(() => {
    const fetchCodes = async () => {
      try {
        const queryParams = new URLSearchParams(window.location.search)
        const pastebinId = queryParams.get('id')
        const headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
        const res = await axios.get('/raw/' + pastebinId, {
          headers
        })
        console.log(res.data)
        setHtmlCode(res.data.html)
        setCssCode(res.data.css)
        setJsCode(res.data.js)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCodes()
  }, [setCssCode, setHtmlCode, setJsCode])

  return (
    <div className='App'>
      <FileExplorer
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        htmlCode={htmlCode}
        cssCode={cssCode}
        jsCode={jsCode}
        shareLink={shareLink}
        setShareLink={setShareLink}
      />
      <div className='right-pane'>
        <div className='code-editor-pane'>
          <div
            onClick={() => setCollapsedEditor(!collapsedEditor)}
            className='code-editor-header'
          >
            {selectedFile === 'index.html' && (
              <div className='file-name'>
                <span>
                  <img className='file-name-icon' src={HTML} alt='HTML' />
                </span>
                <span>HTML</span>
              </div>
            )}
            {selectedFile === 'index.css' && (
              <div className='file-name'>
                <span>
                  <img className='file-name-icon' src={CSS} alt='CSS' />
                </span>
                <span>CSS</span>
              </div>
            )}
            {selectedFile === 'index.js' && (
              <div className='file-name'>
                <span>
                  <img className='file-name-icon' src={JS} alt='JS' />
                </span>
                <span>JS</span>
              </div>
            )}
            <div className='code-editor-toggle'>
              <img
                className={collapsedEditor ? 'collapsed' : ''}
                src={Toggle}
                alt='Code Editor Toggle'
              />
            </div>
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
