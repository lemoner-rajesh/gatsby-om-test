import { createTheme } from '@mui/material/styles';

export const themeConfig = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    direction: "ltr",
    palette: {
        mode: "light",
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: {
            main: "#ff9800",
            contrastText: "#fff"

        },
        secondary: {
            main: "#43474E",
            contrastText: "#000"
        },
        text: {
            primary: "rgba(255, 255, 255, 0.87)",
            secondary: "rgba(255, 255, 255, 0.6)",
            disabled: "rgba(255, 255, 255, 0.38)"
        }
    },
    shape: {
        borderRadius: 8
    },
    typography: {
       
    }

})