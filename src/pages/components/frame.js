// src/components/frame.js
import React from 'react'

const Frame = ({ children }) => {
    return (
        <div>
            <h1>This is the page title frame</h1>
            { children }
        </div>
    )
}

export default Frame