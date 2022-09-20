import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import heroImage from "../assets/images/banner.png";

const Hero = () => {
	return (
		<Box
			sx={{
				my: { lg: "180px", xs: "70px" },
				ml: { sm: "50px", xs: "30px" },
			}}
			position="relative"
			p="20px"
		>
			<Stack
				gap="20px"
				sx={{ align: { xs: "center" }, minWidth: { xs: "80vw" } }}
			>
				<Typography
					color="#FF2625"
					fontWeight="600"
					sx={{ fontSize: { lg: "44px", xs: "40px" } }}
				>
					Fitness Club
				</Typography>
				<Typography variant="h3" fontWeight="600">
					Sweat, Smile <br /> And Repeat
				</Typography>
				<Typography>check out the most efficente exercises</Typography>
				<Button
					color="error"
					variant="contained"
					sx={{ maxWidth: 200, p: 1.3 }}
					href="#exercises"
				>
					Explore exercises
				</Button>
			</Stack>
			<Typography
				fontWeight={600}
				color="#FF2625"
				sx={{
					position: "absolute",
					opacity: 0.1,
					fontSize: 140,
					display: { lg: "block", xs: "none" },
				}}
			>
				EXERCISES
			</Typography>
			<img className="hero-banner-img" src={heroImage} alt="banner" />
		</Box>
	);
};

export default Hero;
