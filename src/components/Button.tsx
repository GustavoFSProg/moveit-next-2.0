import React from 'react'
import '../styles/global.css'

interface ButtonProps {
  background_color: string
  onClick: any
  children: string
  style: any
  color: string
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      style={{
        height: '50px',
        width: '80px',
        color: props.color,
        backgroundColor: props.background_color,
      }}
      color="yellow"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
