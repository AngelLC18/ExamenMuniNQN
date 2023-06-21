import { useState } from "react";
import Footer from "../components/footer/Footer";
import { Drawer, Box, Typography, IconButton, Grid } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import Muni from "../components/MuniModal";
import ResponsiveAppBar from "../components/navbar/AppBar";

const Main = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className='dark:text-gray-100 bg-[url("https://descubres.com/wp-content/uploads/2020/07/IMG_20200710_142628-scaled.jpg")] bg-cover dark:bg-[url("https://guiamarex.com/store/contenido/neuquen/paseo-de-la-costa/paseo-de-la-costa-portada.jpg")] duration-100 w-full min-h-screen'>
      <Grid container>
        <Grid item xs={12}>
          <ResponsiveAppBar />
        </Grid>
        <Grid item xs={12} className="w-full h-screen flex justify-center">
          <Box className=" flex items-center">
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setIsDrawerOpen(true)}
            >
              <PeopleIcon />
            </IconButton>
          </Box>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box
              textAlign="center"
              role="presentation"
              className="dark:bg-slate-900 w-2/3"
            >
              <Typography
                variant="h6"
                component="div"
                className="dark:text-white"
              >
                Lista Personas
              </Typography>
              <Muni />
            </Box>
          </Drawer>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
