import React from 'react'
import { Styledmajor } from './styled/Major.styled'


const major=(props) =>{
    return (
        <Styledmajor>
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
            {props.children}
            <button > {props.btn}</button>
        </Styledmajor>
    )
}

export default major
