import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfileHeader = ({ userId, picturePath }) => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.token);
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;

  const getUser = async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const { firstName, lastName, friends } = user;

  return (
    <>
      {isNonMobileScreens ? (
        <Box
          height={"200px"}
          marginLeft={"19%"}
          marginRight={"19%"}
          sx={{
            marginBottom: "30px",
            backgroundColor: palette.background.alt,
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          display={"flex"}
        >
          <Box padding={"30px"}>
            <Box bottom={"-20px"}>
              <UserImage image={picturePath} size="200px" />
            </Box>
          </Box>
          <Box
            width={"100%"}
            padding={"10px"}
            paddingTop={"80px"}
            color={"red"}
          >
            <FlexBetween gap="1rem">
              <Box>
                <Typography
                  variant="h4"
                  color={dark}
                  fontWeight="500"
                  sx={{
                    "&:hover": {
                      color: palette.primary.light,
                      cursor: "pointer",
                    },
                  }}
                >
                  {firstName} {lastName}
                </Typography>
                <Typography color={medium}>{friends.length} friends</Typography>
              </Box>
            </FlexBetween>
          </Box>
        </Box>
      ) : (
        <Box
          height={"200px"}
          sx={{
            marginBottom: "30px",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          {/* <Box
            width={"200px"}
            height={"200px"}
            borderRadius={"100px"}
            backgroundColor={"blue"}
            position={"absolute"}
            bottom={"-20px"}
          ></Box> */}
          <Box bottom={"-20px"}>
            <UserImage image={picturePath} size="200px" />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProfileHeader;
