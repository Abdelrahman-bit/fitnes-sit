import React, { useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import Loader from "./Loader";

const SearchExercises = ({ exercises, setExercises }) => {
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSearch = async () => {
		if (search) {
			setIsLoading(true);
			const response = await fetchData(
				`https://exercisedb.p.rapidapi.com/exercises`
			);
			const searchedExercises = response.filter(
				(exercise) =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search)
			);
			setIsLoading(false);
			setSearch("");
			setExercises(searchedExercises);
			console.log(exercises);
		}
	};
	const handleKeyDown = (e) => {
		if (e.key === "Enter" || e.keyCode === 13) {
			handleSearch();
		}
	};
	return (
		<Stack align="center" justifyContent="center">
			<Typography
				fontWeight={700}
				sx={{ fontSize: { lg: "44px", xs: "30px" } }}
				mb="49px"
				textAlign="center"
			>
				Awesome Exercises You <br /> Should Know
			</Typography>
			<Box position="relative">
				<TextField
					placeholder="search exercises"
					type="search"
					height="76px"
					align="center"
					sx={{
						input: {
							fontWeight: "700",
							border: "none",
							borderRadius: "4px",
						},
						width: { lg: "900px", xs: "350px" },
						backgroundColor: "#fff",
						borderRadius: "40px",
					}}
					value={search}
					onChange={(e) => setSearch(e.target.value.toLowerCase())}
					onSubmit={handleSearch}
					onKeyDown={(e) => handleKeyDown(e)}
				/>
				<Button
					variant="contained"
					color="error"
					sx={{
						bgcolor: "#FF2625",
						color: "#fff",
						textTransform: "none",
						width: { lg: "173px", xs: "80px" },
						height: "56px",
						position: "absolute",
						right: "150px",
						fontSize: { lg: "20px", xs: "14px" },
						visibility: { xs: "hidden" },
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			{isLoading && <Loader />}
		</Stack>
	);
};

export default SearchExercises;
