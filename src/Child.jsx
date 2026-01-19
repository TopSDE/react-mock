// Child.jsx
import React from 'react'
import GrandChild from './GrandChild'

const Child = (props) => {
    return (
        <>
            <GrandChild
            info3={props}/>
        </>
    )
}

export default Child