import { Box, Grid, Link, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExperienceImg from "../../assets/images/experienceImg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

import { AccessTime } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { House } from "@mui/icons-material";
import { Reviews } from "@mui/icons-material";
const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box>
      <Box
        data-aos="fade-right"
        id="contact"
        sx={{
          backgroundColor: "#F1F1F1",
          // minHeight: "139px",
          padding: { xs: "0", md: "3px 30px" },
          boxSizing: "border-box",
          marginBottom: "20px",
        }}
      >
        <Grid container sx={{ padding: "3% 5% 0", boxSizing: "border-box" }}>
          <Grid item xs={6} md={3} sx={{ display: "flex", mb: 2 }}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    borderRadius: "100%",
                    padding: "5px",
                    backgroundColor: "#A81F24",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    width: "22px",
                    height: "22px",
                  }}
                >
                  <AccessTime sx={{ color: "white" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: "600",
                      color: "#666666",
                      fontSize: "14px",
                      pl: 3,
                    }}
                  >
                    Working Time
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ mt: 1, alignItems: "center" }}>
                <Typography
                  fontWeight={400}
                  sx={{ fontSize: "15px !important" }}
                  fontSize="16px"
                  color="#121212"
                >
                  Appointment booking 24/7
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6} md={3} sx={{ display: "flex", mb: 2 }}>
            <Box
              sx={{
                backgroundColor: "#DCDCDC",
                width: "2px",
                // height: "100px",
                display: { xs: "none", md: "block" },
                mr: 5,
              }}
            />
            <Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    borderRadius: "100%",
                    padding: "5px",
                    backgroundColor: "#A81F24",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    width: "22px",
                    height: "22px",
                  }}
                >
                  <Phone sx={{ color: "white" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: "600",
                      color: "#666666",
                      fontSize: "14px",
                      pl: 3,
                    }}
                  >
                    Call Us
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mt: 1, alignItems: "center" }}>
                <Typography
                  fontWeight={400}
                  fontSize="16px"
                  sx={{ fontSize: "15px !important" }}
                  color="#121212"
                >
                  +44 7311 990756
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} sx={{ display: "flex", mb: 2 }}>
            <Box
              sx={{
                backgroundColor: "#DCDCDC",
                width: "2px",
                // height: "100px",
                display: { xs: "none", md: "block" },
                mr: 5,
              }}
            />

            <Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    borderRadius: "100%",
                    padding: "5px",
                    backgroundColor: "#A81F24",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    width: "22px",
                    height: "22px",
                  }}
                >
                  <Email sx={{ color: "white" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: "600",
                      color: "#666666",
                      fontSize: "14px",
                      pl: 3,
                    }}
                  >
                    Email Us
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mt: 1, alignItems: "center" }}>
                <Typography
                  fontWeight={400}
                  fontSize="16px"
                  sx={{ fontSize: "15px !important" }}
                  color="#121212"
                >
                  support@ambertraining.co.uk
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} md={3} sx={{ display: "flex", mb: 2 }}>
            <Box
              sx={{
                backgroundColor: "#DCDCDC",
                width: "2px",
                // height: "100px",
                display: { xs: "none", md: "block" },
                mr: 5,
              }}
            />

            <Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    borderRadius: "100%",
                    padding: "5px",
                    backgroundColor: "#A81F24",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    width: "22px",
                    height: "22px",
                  }}
                >
                  <House sx={{ color: "white" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: "600",
                      color: "#666666",
                      fontSize: "14px",
                      pl: 3,
                    }}
                  >
                    Address
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", mt: 1, alignItems: "center" }}>
                <Typography
                  fontWeight={400}
                  fontSize="16px"
                  sx={{ fontSize: "15px !important" }}
                  color="#121212"
                >
                  London, United Kingdom.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{
          width: { xs: "80%", md: "80%" },
          margin: "auto",
        }}
      >
        <Grid
          data-aos="fade-right"
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 2, md: 1 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <img
              src={ExperienceImg}
              alt={"experience"}
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          md={6}
          sx={{
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              flexWrap: { xs: "wrap" },
            }}
          >
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                  fontSize: "16px",
                  fontFamily: '"Source Sans Pro", sans-serif',
                  fontWeight: 400,
                  borderBottom: "1px solid #ce1e24",
                  width: "fit-content",
                  transform: { xs: "" },
                  // transformOrigin: "center bottom",
                }}
              >
                ABOUT US
              </Typography>
              <Box sx={{}}>
                <Typography
                  sx={{
                    fontSize: "32px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 700,
                    marginBottom: "20px",
                    width: { xs: "100%", md: "70%" },
                  }}
                >
                  Empowering Professionals, Elevating Businesses
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  At Amber Training, we believe that transformative learning
                  experiences have the power to reshape lives, elevate
                  organisations, and strengthen communities. Drawing from
                  extensive experience in project leadership and
                  forward-thinking approach to professional development, our
                  mission is to deliver exceptional training solutions that
                  empower individuals, enhance corporate capabilities, and set
                  new standards for professional excellence across every sector
                  we serve.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 400,
                    marginBottom: "20px",
                  }}
                >
                  We're committed to delivering excellence that meets the unique
                  needs of each client.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: { xs: "wrap", md: "nowrap" },
                  }}
                >
                  <Link
                    href="/about-us"
                    underline="none"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "#A81F24",
                      color: "#fff",
                      outline: "none",
                      borderRadius: "10px",
                      padding: "10px 24px",
                      marginRight: "20px",
                      letterSpacing: "1px",
                      fontSize: "14px",
                      fontFamily: '"Source Sans Pro", sans-serif',
                      fontWeight: 300,
                    }}
                  >
                    Learn More{" "}
                    <ArrowForwardIosIcon fontSize="smal" marginLeft="10px" />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
