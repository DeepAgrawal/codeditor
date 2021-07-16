import React from 'react'

interface LiveViewInt {
  srcCode: string
}

const LiveView: React.FC<LiveViewInt> = ({ srcCode }) => {
  return (
    <iframe
      srcDoc={srcCode}
      title='web-view'
      sandbox='allow-scripts'
      frameBorder='0'
      width='100%'
      height='100%'
    />
  )
}

export default LiveView
