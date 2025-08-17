import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*
const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}
*/// ---> wrong syntax

const anotherUser = "~Adarsh"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser // it is evaluted expresion
)

createRoot(document.getElementById('root')).render(
    
    reactElement

)
