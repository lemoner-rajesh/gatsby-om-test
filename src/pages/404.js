import * as React from "react"
import { useEffect } from "react"
import { Link } from "gatsby"
import translation from "../assets/LangConfig/translation.json"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@emotion/react";
import { themeConfig } from "../utils/theme";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}



const NotFoundPage = (props) => {
  console.log(props)
  const lang = props.lang
  return (
    <ThemeProvider theme={themeConfig}>
      <main style={pageStyles}>
        <h1 style={headingStyles}>{translation.not_found[lang]}</h1>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button color="secondary" variant="outlined">Secondary</Button>
        </Stack>

        <p style={paragraphStyles}>
          Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              {translation.creating_page[lang]}<code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">{translation.go_to_home[lang]}</Link>.
        </p>
      </main>
    </ThemeProvider>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
