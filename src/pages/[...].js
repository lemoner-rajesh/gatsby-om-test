import * as React from "react"
import { useState, useEffect } from "react"
import translation from "../assets/LangConfig/translation.json"
import { Router, Link } from "@reach/router";
import Payment from "./payment";
import NotFoundPage from "./404";
import PaymentSuccess from "./paymentSuccess";
import Landing from "./landing";

const IndexPage = () => {
  const [lang, setLang] = useState("en_US")

  useEffect(() => {
    const currentUrl = window.location.href
    const url = currentUrl.split('/');
    const langUrl = url[3]
    console.log(langUrl)
    sessionStorage.setItem('lang', langUrl)

  }, [])


  const onOptionChangeHandler = (event) => {
    setLang(event.target.value)
    sessionStorage.setItem('lang', event.target.value)
    console.log(translation.go_to_payment[event.target.value])
  }
  return (

    <Router basepath="/:lang">
      <Payment path="/payment"></Payment>
      <PaymentSuccess path="/payment-success"></PaymentSuccess>
      <Landing path="/"></Landing>
    </Router>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
