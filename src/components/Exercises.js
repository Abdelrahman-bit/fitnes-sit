import React, { useState, useEffect } from "react";
import { Box, Stack, Pagination } from "@mui/material";

import Loader from "./Loader";
import { fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [exercisesPerPage] = useState(6);

	const allExercises = async () => {
		setIsLoading(true);
		const response = await fetchData(
			"https://exercisedb.p.rapidapi.com/exercises"
		);
		setExercises(response);
		setIsLoading(false);
	};

	useEffect(() => {
		allExercises();
	}, []);

	const indexOfLastExercise = currentPage * exercisesPerPage;
	const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
	const currentExercises = exercises.slice(
		indexOfFirstExercise,
		indexOfLastExercise
	);

	const paginate = (event, value) => {
		setCurrentPage(value);

		window.scrollTo({ top: 1800, behavior: "smooth" });
	};

	return (
		<Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
			{isLoading && <Loader />}
			<Stack
				direction="row"
				sx={{ gap: { lg: "107px", xs: "50px" } }}
				flexWrap="wrap"
				justifyContent="center"
			>
				{currentExercises.map((exercise, index) => (
					<ExerciseCard key={index} exercise={exercise} />
				))}
			</Stack>

			<Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
				{exercises.length > 9 && (
					<Pagination
						color="standard"
						shape="rounded"
						defaultPage={1}
						count={Math.ceil(exercises.length / exercisesPerPage)}
						page={currentPage}
						onChange={paginate}
						size="small"
					/>
				)}
			</Stack>
		</Box>
	);
};

export default Exercises;
