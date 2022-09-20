import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

export const Navbar = () => {
	return (
		<Stack
			sx={{
				gap: { sm: "122px", xs: "40px" },
				mt: { sm: "32px", xs: "20px" },
			}}
			align="center"
			justifyContent="start"
		>
			<Stack
				direction="row"
				alignItems="flex-end"
				justifyContent="space-around"
				// width="50%"
				gap="30px"
				fontFamily="Alegreya"
				sx={{
					padding: { sm: "0 20px", xs: "0 10px" },
					width: { lg: "40%", sm: "55%", xs: "70%" },
				}}
			>
				<Link to="/">
					<img
						style={{
							width: "45px",
							height: "45px",
							margin: "0 20px",
						}}
						src={logo}
						alt="logo"
					/>
				</Link>
				<Link
					style={{
						textDecoration: "none",
						color: "#3a1212",
						borderBottom: "3px solid #ff2625",
					}}
					to="/"
				>
					Home
				</Link>
				<a
					style={{ textDecoration: "none", color: "#3a1212" }}
					href="#exercises"
				>
					exercises
				</a>
			</Stack>
		</Stack>
	);
};
