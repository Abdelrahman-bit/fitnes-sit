import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Details from "../components/Details";
import { fetchData } from "../utils/fetchData";

export const ExerciceDetails = () => {
	const [targetExerciseDetails, setTargetExerciseDetails] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		const getTargetExerciseDetails = async () => {
			setIsLoading(true);
			const exercisesDb =
				"https://exercisedb.p.rapidapi.com/exercises/exercise";
			const targetData = await fetchData(`${exercisesDb}/${id}`);
			setTargetExerciseDetails(targetData);
			setIsLoading(false);
		};
		getTargetExerciseDetails();
	}, [id]);
	return (
		<div>
			<Details
				targetExerciseDetails={targetExerciseDetails}
				isLoading={isLoading}
			/>
		</div>
	);
};
