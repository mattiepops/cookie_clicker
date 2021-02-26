import React from 'react'

export default function Button(props){

    const {isDisabled, onClick, text } = props;
    return(
        <button 
        className="buyBtn" 
        disabled={isDisabled}
        onClick={onClick}
        >
            {text}
        </button>
    )
}