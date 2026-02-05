import { Components } from "@mui/material/styles";

const MuiButton: Components = {
    MuiButton: {
        defaultProps: {
            variant: "contained",
        },
        styleOverrides: {
            root: {
                borderRadius: "0.5rem",
            },
            contained: {
                backgroundColor: "#49C949",
                color: "#000000",
            },
            outlined: {
                border: "1px solid #000000",
            },

            
        },
    },

}

export default MuiButton;