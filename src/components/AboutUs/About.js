import { Box, Grid, Typography } from "@mui/material";
import AboutImg from "../../assets/images/experienceImg.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} data-aos="fade-right">
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
                  Who we are
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
                  We understand that quality training is the cornerstone of
                  success - whether for a multinational corporation, a local
                  construction firm, an early years setting, or an individual
                  seeking to advance their career. This understanding drives our
                  comprehensive approach, where premium education meets
                  practical application, and where every training session is
                  tailored to deliver measurable results. We envision Amber
                  Training as the premier catalyst for organisational and
                  professional growth across all industries. Whether it's
                  essential First Aid certification for nurseries and food
                  businesses, comprehensive safeguarding programs for
                  corporations, ESOL courses tailored for diverse workforces, or
                  specialised safety training for construction sites, - we're
                  committed to delivering excellence that meets the unique needs
                  of each client.
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: '"Source Sans Pro", sans-serif',
                    fontWeight: 600,
                    marginBottom: "10px",
                  }}
                >
                  Our Core Values:
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#A81F24", zIndex: 0, marginLeft: "10px" }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginLeft: "10px",
                        zIndex: 0,
                      }}
                    >
                      Integrity
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#A81F24", zIndex: 0 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginLeft: "10px",
                        zIndex: 0,
                      }}
                    >
                      Excellence
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      marginBottom: "6px",
                      zIndex: 0,
                    }}
                  >
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#A81F24", zIndex: 0 }}
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: '"Source Sans Pro", sans-serif',
                        fontWeight: 400,
                        marginLeft: "10px",
                        zIndex: 0,
                      }}
                    >
                      Innovation
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              height: "100%",
            }}
          >
            <img src={AboutImg} alt={"About"} style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
