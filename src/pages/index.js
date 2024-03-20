import * as React from "react"

import  { useEffect } from 'react'


const Index = () => {

    useEffect(()=>{
        if (window.location.pathname !== '/en/') {
            window.location.href = '/en/';
          }
    })
  return (
    <div></div>
  )
}
export default Index

