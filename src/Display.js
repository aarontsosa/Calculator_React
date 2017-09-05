import React from 'react';

const Display = ({info}) => {
    return (
        <div>
            <input type="text" className="form-control" value={info}></input>
        </div>
    );
};

export default Display;