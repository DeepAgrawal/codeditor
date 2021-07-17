import React from 'react'

import HTML from '../assets/html-icon.png'
import CSS from '../assets/css-icon.png'
import JS from '../assets/js-icon.png'

interface FileExplorerInt {
  selectedFile: string
  setSelectedFile: React.Dispatch<React.SetStateAction<string>>
}

const FileExplorer: React.FC<FileExplorerInt> = ({
  selectedFile,
  setSelectedFile
}) => {
  return (
    <div className='file-explorer'>
      <div className='file-explorer-header'>
        <span className='file-explorer-header-text'>EXPLORER</span>
      </div>
      <div className='files'>
        <div
          onClick={() => setSelectedFile('index.html')}
          className={selectedFile === 'index.html' ? 'file active' : 'file'}
        >
          <img className='file-icon' src={HTML} alt='index.html' />
          <span className='file-name'>index.html</span>
        </div>
        <div
          onClick={() => setSelectedFile('index.css')}
          className={selectedFile === 'index.css' ? 'file active' : 'file'}
        >
          <img className='file-icon' src={CSS} alt='index.css' />
          <span className='file-name'>index.css</span>
        </div>
        <div
          onClick={() => setSelectedFile('index.js')}
          className={selectedFile === 'index.js' ? 'file active' : 'file'}
        >
          <img className='file-icon' src={JS} alt='index.js' />
          <span className='file-name'>index.js</span>
        </div>
      </div>
    </div>
  )
}

export default FileExplorer
