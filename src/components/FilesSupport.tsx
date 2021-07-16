const JSCode = `// write some JS here`

const CSSCode = `/* write some CSS here */`

const HTMLCode = `<!-- write some HTML here -->`

interface supportedFileTypesInt {
  [key: string]: {
    name: string
    language: string
    value: string
  }
}

const supportedFileTypes: supportedFileTypesInt = {
  'index.js': {
    name: 'index.js',
    language: 'javascript',
    value: JSCode
  },
  'index.css': {
    name: 'index.css',
    language: 'css',
    value: CSSCode
  },
  'index.html': {
    name: 'index.html',
    language: 'html',
    value: HTMLCode
  }
}

export default supportedFileTypes
