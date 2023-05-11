import React from 'react'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

Button.propTypes = {
    type: propTypes.oneOf(['button', 'link']),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,

}

//havent add isDisabled and isLoading

export default function Button(props) {
    const className = [props.className]
    // if (props.example) className.push ('')

    const navigate = useNavigate()
    
    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    const disabled = isLoading || buttonDisabled;

    if (props.type === 'link'){
        if (props.href){
            return(
                <a 
                    href={props.href} 
                    className={className.join(' ')}  
                    target={props.target === "_blank" ? "_blank" : undefined} 
                    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                    disabled={disabled}
                >
                    {props.children}
                </a>
            )
        }
        else {
            return (
                <button 
                    onClick={()=> navigate(props.to)} 
                    className={className.join(' ')}
                    disabled={disabled}
                >
                    {props.children}
                </button>
            )
        }
    }
    if (props.type === 'button'){
        return (
            <button 
                className={className.join(" ")} 
                onClick= {onClick} 
                disabled={disabled}
            >
                {props.children}
            </button>
        )
    }
}
