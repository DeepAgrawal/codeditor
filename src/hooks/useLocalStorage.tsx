import React from 'react'

const useLocalStorage = (key: string, initialValue: any) => {
  const [val, setVal] = React.useState(() => {
    const jsonVal = localStorage.getItem(key)
    if (jsonVal != null) return JSON.parse(jsonVal)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val))
  }, [key, val])

  return [val, setVal]
}

export default useLocalStorage
