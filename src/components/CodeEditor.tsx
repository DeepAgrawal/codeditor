import React from 'react'
import Editor from '@monaco-editor/react'
import supportedFileTypes from './FilesSupport'

interface CodeEditorInt {
  selectedFile: string
  setHtmlCode: React.Dispatch<React.SetStateAction<string>>
  setCssCode: React.Dispatch<React.SetStateAction<string>>
  setJsCode: React.Dispatch<React.SetStateAction<string>>
  setErrors: React.Dispatch<React.SetStateAction<any[]>>
}

const CodeEditor: React.FC<CodeEditorInt> = ({
  selectedFile,
  setHtmlCode,
  setCssCode,
  setJsCode,
  setErrors
}) => {
  const file = supportedFileTypes[selectedFile]

  const handleOnChange = (value: string | undefined, event: any) => {
    if (selectedFile === 'index.html' && value !== undefined) {
      setHtmlCode(value)
    } else if (selectedFile === 'index.css' && value !== undefined) {
      setCssCode(value)
    } else if (selectedFile === 'index.js' && value !== undefined) {
      setJsCode(value)
    }
  }

  const handleEditorValidation = (markers: any[]) => {
    setErrors(markers)
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
        onValidate={handleEditorValidation}
      />
    </>
  )
}

export default CodeEditor
