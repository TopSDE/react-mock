// GrandParent.jsx
import React from 'react'
import Parent from './Parent'

const GrandParent = () => {
    let information = {
        institute: "Qspiders"  , 
        course: {frontend:"Reactjs", backend:"Nodejs"},
        trainers: ["xyz","abc"]
    }

    return (
        <>
            <Parent
            info1={information}/>
        </>
    )
}

export default GrandParent