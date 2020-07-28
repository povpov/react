import React from 'react';

const Button1 = (props) => {
    return (
        <>
            <button
                onClick={props.onClick}
                id={props.id}
                value={props.value}
            >
                {props.text}
            </button>
        </>
    );

}

export default Button1;
