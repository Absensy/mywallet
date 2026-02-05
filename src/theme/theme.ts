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
        fontFamily: '"Inter", "Roboto", sans-serif',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,

        h1: { fontSize: "2.5rem", fontWeight: 700 },
        h2: { fontSize: "2rem", fontWeight: 700 },
        h3: { fontSize: "1.5rem", fontWeight: 700 },
        h4: { fontSize: "1.25rem", fontWeight: 700 },
        h5: { fontSize: "1rem", fontWeight: 700 },
        h6: { fontSize: "0.75rem", fontWeight: 700 },
        body1: { fontSize: "1rem", fontWeight: 400 },
        body2: { fontSize: "0.75rem", fontWeight: 400 },
    },    
    components: {
        ...components,
    },
});

export default theme;