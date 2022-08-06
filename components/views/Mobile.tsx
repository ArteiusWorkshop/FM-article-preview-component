import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { Footer, ProfileFooter } from "../ui";

export const Mobile = () => {
  const [share, setShare] = useState(false);
  const [footerColor, setFooterColor] = useState("fprofile");
  const [shareColor, setShareColor] = useState("gray");

  const handleShare = () => {
    setShare(!share);
    footerColor === "fprofile"
      ? setFooterColor("fshare")
      : setFooterColor("fprofile");
    shareColor === "gray" ? setShareColor("white") : setShareColor("gray");
  };
  return (
    <>
      <Card sx={{ maxWidth: 330, borderRadius: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image="/img/drawers.jpg"
          alt="drawers"
        />
        <CardContent sx={{ maxHeight: 240, padding: 4 }}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            className="heading"
            fontWeight={700}
          >
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </Typography>
          <Typography variant="body2" fontWeight={500} className="paragtaph">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </Typography>
        </CardContent>
        <Box
          className={footerColor}
          display="flex"
          alignItems="center"
          paddingLeft={4}
        >
          {share ? <Footer /> : <ProfileFooter />}
          <Box>
            <IconButton
              aria-label="share"
              sx={{ marginLeft: "55px" }}
              className="share"
              onClick={handleShare}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  fill={shareColor}
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
};
