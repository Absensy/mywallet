import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";

const Header = () => {
    return (
        <Container>
            {/* Logo link to home page */}
            <Link href="/">
                <Box display="flex">
                    <Typography variant="h6">MyWallet</Typography>
                </Box>
            </Link>
            


        </Container>
    )
}

export default Header;