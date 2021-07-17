import React from 'react'
import axios from 'axios'

import HTML from '../assets/html-icon.png'
import CSS from '../assets/css-icon.png'
import JS from '../assets/js-icon.png'
import COPY from '../assets/copy.svg'
import CLOSE from '../assets/close.svg'

interface FileExplorerInt {
  selectedFile: string
  setSelectedFile: React.Dispatch<React.SetStateAction<string>>
  htmlCode: string
  cssCode: string
  jsCode: string
  shareLink: string | null
  setShareLink: React.Dispatch<React.SetStateAction<string | null>>
}

const FileExplorer: React.FC<FileExplorerInt> = ({
  selectedFile,
  setSelectedFile,
  htmlCode,
  cssCode,
  jsCode,
  shareLink,
  setShareLink
}) => {
  const [shareOpen, setShareOpen] = React.useState(false)
  const [postLimitExceeded, setPostLimitExceeded] = React.useState(false)
  const handleShare = async () => {
    try {
      const payload = {
        html: htmlCode,
        css: cssCode,
        js: jsCode
      }
      const form = new FormData()
      form.append('api_dev_key', 'MRQPY0SIBcKo0LpB_2k8RzMOSb0KULBI')
      form.append('api_option', 'paste')
      form.append('api_paste_code', JSON.stringify(payload))
      const res = await axios({
        method: 'post',
        url: '/api/api_post.php',
        data: form,
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      // const res = { data: 'https://pastebin.com/BBqnYGTN' }

      const array = res.data.split('/')
      const lastsegment = array[array.length - 1]
      setShareLink('https://deepagrawal.github.io/codeditor?id=' + lastsegment)
      setShareOpen(true)
    } catch (error) {
      setShareOpen(true)
      setPostLimitExceeded(true)
    }
  }

  return (
    <>
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
        <div className='share-btn-container'>
          <button className='share-btn' onClick={handleShare}>
            Share
          </button>
        </div>
      </div>
      <div className={shareOpen ? 'overlay' : 'overlay close'}></div>
      <div className={shareOpen ? 'share' : 'share close'}>
        <div className='share-header'>
          <span className='share-header-text'>Share link</span>
          <span
            onClick={() => {
              setShareOpen(false)
              setPostLimitExceeded(false)
            }}
            className='close-btn'
          >
            <img src={CLOSE} alt='Close share' />
          </span>
        </div>
        {postLimitExceeded ? (
          <div style={{ marginTop: '1rem' }} className='copy-link-text'>
            Post limit exceeded for PASTEBIN API
          </div>
        ) : (
          <div className='copy-link-container'>
            <div className='copy-link-text'>Copy link</div>
            <div className='copy-link-box'>
              <span>{shareLink}</span>
              <img
                onClick={() => {
                  navigator.clipboard.writeText(shareLink ? shareLink : '')
                }}
                src={COPY}
                alt='COPY LINK'
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FileExplorer
