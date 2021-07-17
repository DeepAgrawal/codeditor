const JSCode = `// Code some JS`

const CSSCode = `h1 {
  color: rgb(0, 122, 204);
  text-align: center;
}`

const HTMLCode = `<!-- Start writing HTML (no need of html and body tags) -->
<h1>
    Welome !!!
</h1>`

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
