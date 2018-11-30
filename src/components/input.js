import React from 'react';

export default ({input, label, meta:{error, touched}} ) => {
    <div className='input-field'>
        <input {...input} type='text'/>
        <label>{label}</label>
        <p className="red-text text-darken-2">{touched, error}</p>
    </div>
}