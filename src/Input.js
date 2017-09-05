import React from 'react';

const Input = ({value, func}) => {
    return (<button type="button" className="btn" onClick={(e)=> {
        update(e, func)
        }}>{value}</button>)
}

const update = (e, func) => {
    let value = e.target.textContent
    func(value)
}

export default Input