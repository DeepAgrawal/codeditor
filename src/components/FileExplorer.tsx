import React from 'react'

import HTML from '../assets/html-icon.png'
import CSS from '../assets/css-icon.png'
import JS from '../assets/js-icon.png'

interface FileExplorerInt {
  setSelectedFile: React.Dispatch<React.SetStateAction<string>>
}

const FileExplorer: React.FC<FileExplorerInt> = ({ setSelectedFile }) => {
  return (
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
  )
}

export default FileExplorer
