import React from 'react'
import { Suspense } from 'react'

const LazyComponent = React.lazy(() => import('./Mycomponent.jsx'))

const Lazy = () => {
  return (
    <div>
        <Suspense fallback={ <div>loading...</div>}>
        <LazyComponent />
        </Suspense>
    </div>
  )
}

export default Lazy