import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import {ReactComponent as ReactLogo} from '../../assets/undraw_social_distancing_2g0u.svg';

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Connect
        </Typography>
      </Box>
      <Box
        sx={{ 
          display: 'flex',
          // justifyContent: 'flex-end',
          justifyContent: 'space-between',
          width: 1,
        }}
        height={"85vh"}
      >
        {isNonMobileScreens ? (
        <Box
        p="2rem"
        m="auto 5rem"
        >
        <ReactLogo />
        </Box>) : (
        <Box sx={{ display: 'none' }}>
        <ReactLogo />
        </Box>
        )
        }
      <Box
        width={isNonMobileScreens ? "40%" : "93%"}
        p="2rem"
        m="auto 5rem"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Connect, the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;