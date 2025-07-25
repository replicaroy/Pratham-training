import React from 'react'

function Wrapper({children}) {
  return (
    <div>This is my Wrapper Component

        <div>{children}</div>
        <button>hello</button>
    </div>
  )
}

export default Wrapper