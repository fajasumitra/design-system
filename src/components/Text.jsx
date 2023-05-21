import React from 'react'

export default function Text(props) {
  const textClassNames = {
    size : {
      xs : 'text-xs',
      sm : 'text-sm',
      md : 'text-md',
      lg : 'text-lg',
      xl : 'text-xl',
      xl2 : 'text-2xl',
      xl3 : 'text-3xl',
      xl4 : 'text-4xl',
      xl5 : 'text-5xl',
      xl6 : 'text-6xl',
      xl7 : 'text-7xl',
      xl8 : 'text-8xl',
      xl9 : 'text-9xl',
    },
  }
  
  return (
    <>
      <p className={`${textClassNames.size[props.size]} ${props.className}`}
        >
        {props.children}
      </p>
    </>
  )
}
