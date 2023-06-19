import React from 'react'
import propTypes from 'prop-types'

Text.propTypes = {
  size : propTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xl2',
    'xl3',
    'xl4',
    'xl5',
    'xl6',
    'xl7',
    'xl8',
    'xl9',
  ]),
  className : propTypes.string,
}

export default function Text(props) {
  const textClassNames = {
    size : {
      'j1' : ['font-averta text-4xl font-bold'],
      'j2' : ['font-averta text-3xl font-bold'],
      'h1' : ['font-averta text-2xl font-semibold'],
      'h2' : ['font-averta text-xl font-semibold'],
      'h3' : ['font-averta text-lg font-semibold'],
      'h4' : ['font-averta text-base font-bold'],
      'h5' : ['font-averta text-base font-semibold'],
      'h6' : ['font-averta text-sm font-semibold'],
      's1' : ['text-lg font-medium'],
      's2' : ['text-base font-medium'],
      's3' : ['text-sm font-medium'],
      's4' : ['text-xs font-medium'],
      'b1' : ['text-lg'],
      'b2' : ['font-primary text-base'],
      'b3' : ['text-sm font-normal'],
      'c1' : ['text-xs'],
      'c2' : ['text-[11px] leading-[14px]'],
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
