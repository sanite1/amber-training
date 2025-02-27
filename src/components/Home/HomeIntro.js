import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Link, Grid } from "@mui/material";
import homeIntro from "../../assets/images/jHomeIntro.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowRight } from "@mui/icons-material";

function HomeIntro() {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const theme = useTheme();

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "90vh",
        backgroundImage: `url(${homeIntro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "rgba(128, 128, 128, 0.7)",
          width: "100%",
          height: "100%",
        }}
      >
        <Box data-aos="fade-up">
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: theme.typography.h3.fontSize,
              },
              width: { xs: "80%", md: "60%" },
              margin: "auto",
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 700,
              marginBottom: "10px",
              letterSpacing: "2px",
              lineHeight: "1.5",
              color: "#fff",
            }}
          >
            Your Most Trusted Partner in Training & Consultancy
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: theme.typography.body2.fontSize,
                md: theme.typography.body1.fontSize,
              },
              width: { xs: "90%", md: "70%" },
              margin: "auto",
              marginBottom: "20px",
              fontFamily: '"Source Sans Pro", sans-serif',
              letterSpacing: "1px",
              color: "#fff",
            }}
          >
            Embark on a transformative journey with us today! We specialise in
            providing tailored training and consultancy solutions that empower
            individuals and organisations to achieve their goals. Your success
            is our mission.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="/trainings"
              color="inherit"
              underline="none"
              sx={{
                display: "flex",
                alignItems: "center",
                background: "#ce1e24",
                color: "#fff",
                outline: "none",
                borderRadius: "10px",
                padding: "10px 24px",
                letterSpacing: "1px",
                fontSize: "14px",
                fontFamily: '"Source Sans Pro", sans-serif',
                fontWeight: 300,
              }}
            >
              Get Started{" "}
              <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
            </Link>
          </Box>
        </Box>
      </Box> */}
      <Box
        id="home"
        sx={{
          marginTop: "10vh",
          backgroundColor: "#555964B3",
          color: "#fff",
        }}
        data-aos="fade-right"
      >
        <Grid
          container
          sx={{
            width: "100%",
            height: "90vh",
          }}
        >
          <Grid item md={7} xs={12} data-aos="fade-right">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                padding: "0 10% 0 30%",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    backgroundColor: "#A81F24",
                    width: "220px",
                    height: "220px",
                    borderRadius: "100%",
                    position: "absolute",
                    top: "-30%",
                    left: "-33%",
                    zIndex: "-100",
                  }}
                ></Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: "24px !important",

                      md: "43px !important",
                    },
                    fontWeight: "700",
                  }}
                >
                  Access
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: "24px !important",

                      md: "43px !important",
                    },
                    fontWeight: "700",
                  }}
                >
                  Industry-leading
                </Typography>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: {
                      xs: "24px !important",

                      md: "43px !important",
                    },
                    fontWeight: "700",
                  }}
                >
                  Training Programs
                </Typography>
                <Typography color="#fff" mb={5}>
                  Join a network of professionals who are shaping the future of
                  their industries. Explore our courses and take the next step
                  in your professional journey today.
                </Typography>
                <Box>
                  <Box
                    onClick={() => {
                      navigate("/trainings");
                    }}
                    sx={{
                      borderRadius: "50px",
                      padding: "8px 10px",
                      backgroundColor: "#A81F24",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      width: "200px",
                    }}
                  >
                    <Typography sx={{ color: "white" }} variant="caption">
                      Explore Courses
                    </Typography>
                    <KeyboardArrowRight sx={{ color: "white" }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            data-aos="fade-down-left"
            item
            md={5}
            xs={12}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Box sx={{ display: "flex", pt: 20 }}>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#EC2227",
                    height: "80px",
                    width: "30px",
                  }}
                ></Box>
                <Box
                  sx={{
                    backgroundColor: "#A31923",
                    height: "50px",
                    width: "30px",
                  }}
                />
              </Box>
              <Box sx={{ width: "100%" }}>
                {/* <img src={homeIntro} alt="" width="100%" height="100%" /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HomeIntro;
