// GrandChild.jsx
import React from 'react'

const GrandChild = (props) => {
    console.log(props);

    let {
        info3: 
            {info2: 
                {info1 : 
                    {institute, course: {frontend, backend}, trainers: [a,b]
                    }
                }
            }
        } = props
    
    return (
        <>
            <h1>{institute}</h1>
            <h2>Courses Available = {frontend}, {backend}</h2>
            <h2>Trainers Handling = {a}, {b}</h2>
            <h3>{frontend} handled by {a}</h3>
            <h3>{backend} handled by {b}</h3>
        </>
    )
}

export default GrandChild