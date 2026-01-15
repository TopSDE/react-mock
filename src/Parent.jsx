// Parent.jsx Code
import React from 'react'
import MyProfile from './modulecss/MyProfile'
import imgUrl from "./images/x7.jpg"

const Parent = () => {
    const institute = {
        iname: "Qspiders",
        mode: "Online",
        fees: 5000,
        course: "FULL STACK",
        photo: imgUrl,
        rating: 4.3
    }


    return (
        <MyProfile info={institute}>
            <h4>
                OUR MANTRA IS QUALITY
            </h4>
            <p>
                Training to all those Aspiring for successful IT carrer
            </p>
        </MyProfile>
    )
}

export default Parent