import React, { useRef, useState } from 'react'

const UncontrolledForm = () => {
    const [vlaue, setValue] = useState('')
    const inputRef = useRef(null);

    const handleSubmit = (e)=> {
        e.preventDefault();
        const data  =e.target.value
        console.log('value',inputRef.current.value)
        setValue(data)
    }
  return (
    <div>
        <h1>UncontrolledForm</h1>

        <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Save</button>
        </form>

    </div>
  )
}

export default UncontrolledForm