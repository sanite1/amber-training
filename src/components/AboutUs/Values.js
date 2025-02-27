import { Box, Grid, Typography } from "@mui/material";
import JMissionSec from "../../assets/images/jMissionSec.png";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";

const Values = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box
      sx={{
        margin: "50px auto",
        padding: "50px 0",
        backgroundImage: `url(${JMissionSec})`,
        backgroundSize: "cover", // Cover the entire box
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent tiling
        color: "#fff",
      }}
    >
      <Box
        data-aos="fade-up"
        sx={{
          width: { xs: "90%", md: "80%" },
          margin: "50px auto",
          // padding: "50px 0",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 400,
            borderBottom: "1px solid #ce1e24",
            width: "fit-content",
            margin: "auto",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Our Vison
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 700,
            width: { xs: "90%", md: "60%" },
            margin: "auto",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          The values that guide our Firm
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 400,
            width: "70%",
            margin: "auto",
            textAlign: { xs: "justify", md: "center" },
          }}
        >
          At Amber Training, we're not just providing certifications - we're
          building competence, ensuring compliance, and driving success across
          every level of business and society.
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "70%" },
          margin: "auto",
          padding: { xs: "20px" },
          backgroundColor: "rgba(128, 128, 128, 0.1)",
          borderRadius: "20px",
          boxSizing: "border-box",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 700,
            margin: "10px 0",
            textAlign: "center",
          }}
        >
          VISION
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: '"Source Sans Pro", sans-serif',
            fontWeight: 400,
            textAlign: { xs: "justify", md: "center" },
          }}
        >
          To become the most trusted name in training across all sectors,
          recognised not just for the breadth of our expertise but for the depth
          of our impact. We measure our success through the enhanced
          capabilities of our corporate clients, the improved safety standards
          in workplaces, the professional growth of individuals, and the overall
          advancement of the organisations we serve.
        </Typography>
      </Box>
      <Grid container sx={{ width: "80%", margin: "auto" }}>
        <Grid
          data-aos="fade-left"
          item
          xs={12}
          sm={6}
          sx={{
            width: { xs: "100%" },
            marginTop: { xs: "20px", md: "0" },
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Values;
