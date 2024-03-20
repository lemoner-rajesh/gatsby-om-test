import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@emotion/react";
import { themeConfig } from "../utils/theme";
import { navigate } from "@reach/router";
import translation from "../assets/LangConfig/translation.json";


export default function Payment(paymentProps) {
  const lang = sessionStorage.getItem('lang')



  const navigateToPayment = () => {
    navigate(`/${paymentProps.lang}/payment-success`)
  }
  return (<ThemeProvider theme={themeConfig}>
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={navigateToPayment}>{translation.go_to_payment_success[paymentProps.lang]}</Button>
      <Button variant="contained" onClick={navigateToPayment}>{translation.go_to_payment_success[paymentProps.lang]}</Button>
      <Button variant="outlined" onClick={navigateToPayment}>{translation.go_to_payment_success[paymentProps.lang]}</Button>
      <Button color="secondary" variant="outlined" onClick={navigateToPayment}>{translation.go_to_payment_success[paymentProps.lang]}</Button>
    </Stack>
  </ThemeProvider>
  )
}

export const Head = () => <title>Payment Page</title>

