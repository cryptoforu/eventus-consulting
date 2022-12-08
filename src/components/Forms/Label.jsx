import React from 'react';

const Label = ({label, ...props}) => {
    return  <label htmlFor={props.id || props.name} className='block mb-2 text-base font-medium text-slate-700 dark:text-slate-400'>{label}</label>
};

export default Label;