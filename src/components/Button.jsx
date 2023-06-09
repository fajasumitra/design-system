import React from 'react'
import propTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'

//do npm install prop-types react-router-dom react-icons

//<Button type="link" to="/register" className="classname" isDisabled isLoading>Register</Button>

//<Button type="button" onClick={handleClick} className="classname" isDisabled isLoading>Register</Button>

//<Button type="link" href="https://google.com" target="_blank" className="classname" isDisabled isLoading>Register</Button>

Button.propTypes = {
    type: propTypes.oneOf(['button', 'link']),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    to: propTypes.string
}

export default function Button(props) {
    const className = [props.className]

    const navigate = useNavigate()
    
    const onClick = () => {
        if (props.onClick) props.onClick()
    }

    if (props.type === 'link'){
        if (props.href){
            return(
                <a 
                    href={props.href} 
                    className={className.join(' ')}  
                    target={props.target === "_blank" ? "_blank" : undefined} 
                    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                    disabled = {props.isDisabled || props.isLoading ? true : false}
                >
                    {`${props.children}`}{props.isLoading ? <ImSpinner2 className='animate-spin' /> : null}
                </a>
            )
        }
        else {
            return (
                <button 
                    onClick={()=> navigate(props.to)} 
                    className={className.join(' ')}
                    disabled={props.isDisabled || props.isLoading ? true : false}
                >
                    {`${props.children}`}{props.isLoading ? <ImSpinner2 className='animate-spin' /> : null}
                </button>
            )
        }
    }
    if (props.type === 'button'){
        return (
            <button 
                className={className.join(" ")} 
                onClick= {onClick} 
                disabled={props.isDisabled || props.isLoading ? true : false}
            >
                {`${props.children}`}{props.isLoading ? <ImSpinner2 className='animate-spin' /> : null}
            </button>
        )
    }
}
