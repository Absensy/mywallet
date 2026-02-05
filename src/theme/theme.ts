import { createTheme } from "@mui/material/styles";
import components from "./components";

const theme = createTheme({
    palette: {
        primary: {
            main: '#00ff15',
            
        },

        secondary: {
            main: '#006b00',
        },
        background: {
            default: '#FAFBFF',
            paper: '#FFFFFF',
        },
        common: {
            black: '#2c2c2c',
            white: '#ffffff',
        },
        error: {
            main: '#ef4444',
            contrastText: '#2c2c2c',
        },
        warning: {
            main: '#ffc73a',
            contrastText: '#2c2c2c',
        },
        info: {
            main: '#9a9da4',
            contrastText: '#2c2c2c',
        },
        text: {
            primary: '#2c2c2c',
            secondary: '#4b5563',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1: {
            fontSize: "42px",
        },
        h2: {
            fontSize: "32px",

        },
        h3: {
            fontSize: "24px",
        },
        h4: {
            fontSize: "20px",
        },
        h5: {
            fontSize: "18px",
        },
        h6: {
            fontSize: "16px",
        },
        body1: {
            fontSize: "16px",
        },
        body2: {
            fontSize: "14px",
        },
    },    
    components: {
        ...components,
    },
});

export default theme;