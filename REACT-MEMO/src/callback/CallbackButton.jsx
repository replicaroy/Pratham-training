import React from 'react'

const CallbackButton = React.memo(({onClickFn}) => {
    console.log('button rendered')
  return (
    <div>
        <button onClick={onClickFn}>Click ME</button>
    </div>
  )
})

export default CallbackButton