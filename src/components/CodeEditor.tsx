import React from 'react'
import Editor from '@monaco-editor/react'
import supportedFileTypes from './FilesSupport'

interface CodeEditorInt {
  selectedFile: string
  setHtmlCode: React.Dispatch<React.SetStateAction<string>>
  setCssCode: React.Dispatch<React.SetStateAction<string>>
  setJsCode: React.Dispatch<React.SetStateAction<string>>
}

const CodeEditor: React.FC<CodeEditorInt> = ({
  selectedFile,
  setHtmlCode,
  setCssCode,
  setJsCode
}) => {
  const file = supportedFileTypes[selectedFile]

  const handleOnChange = (value: string | undefined, event: any) => {
    const timeout = setTimeout(() => {
      if (selectedFile === 'index.html' && value !== undefined) {
        setHtmlCode(value)
      } else if (selectedFile === 'index.css' && value !== undefined) {
        setCssCode(value)
      } else if (selectedFile === 'index.js' && value !== undefined) {
        setJsCode(value)
      }
    }, 1000)

    return () => clearTimeout(timeout)
  }

  return (
    <>
      <Editor
        height='45vh'
        theme='vs-dark'
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        onChange={handleOnChange}
      />
    </>
  )
}

export default CodeEditor
