import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@emotion/react";
import { themeConfig } from "../utils/theme";
import { navigate } from "@reach/router";
import translation from "../assets/LangConfig/translation.json";

const Landing = (landingProps) => {

    const navigateToPayment = () => {
        navigate(`/${landingProps.lang}/payment`)
    }
    return <ThemeProvider theme={themeConfig}>
        <Stack spacing={2} direction="row">
            <Button variant="text" onClick={navigateToPayment}>{translation.go_to_payment[landingProps.lang]}</Button>
            <Button variant="contained" onClick={navigateToPayment}>{translation.go_to_payment[landingProps.lang]}</Button>
            <Button variant="outlined" onClick={navigateToPayment}>{translation.go_to_payment[landingProps.lang]}</Button>
            <Button color="secondary" variant="outlined" onClick={navigateToPayment}>{translation.go_to_payment[landingProps.lang]}</Button>
        </Stack>
    </ThemeProvider>


}

export default Landing;