import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Footer, ProfileFooter } from "../ui";
import { Fade, IconButton, Popper, PopperPlacementType } from "@mui/material";
import { useState } from "react";

export const Desktop = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  const handleClick =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };
  return (
    <Card
      sx={{ display: "flex", maxWidth: 730, maxHeight: 280, borderRadius: 3 }}
    >
      <CardMedia
        component="img"
        sx={{ width: 285 }}
        image="/img/drawers.jpg"
        alt="drawers"
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", maxWidth: "445" }}
        pr={2}
        pl={2}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            className="heading"
            fontWeight={700}
            fontSize="20px"
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
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          <ProfileFooter />
          <Popper
            open={open}
            anchorEl={anchorEl}
            placement={placement}
            transition
            className="popper fshare"
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box display="flex" alignItems="center">
                  <Footer />
                </Box>
              </Fade>
            )}
          </Popper>
          <IconButton
            aria-label="share"
            sx={{ marginLeft: "55px" }}
            className="share"
            onClick={handleClick("top")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path
                fill="gray"
                d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
              />
            </svg>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};
