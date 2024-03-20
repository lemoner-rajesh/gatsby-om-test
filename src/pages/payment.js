import React, { useEffect } from 'react'
import translation from "../assets/LangConfig/translation.json"


export default function Payment() {
  const lang=sessionStorage.getItem('lang')

 

  return (
    // <div>{translation.payyment_page[lang]}</div>
    <div>hello</div>
  )
}

export const Head = () => <title>Payment Page</title>

