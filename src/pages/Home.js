import React, { useState } from "react";
import BodyParts from "../components/BodyParts";
import Exercises from "../components/Exercises";
import Hero from "../components/Hero";
import SearchExercises from "../components/SearchExercises";

export const Home = () => {
	const [exercises, setExercises] = useState([]);
	return (
		<div>
			<Hero />
			<SearchExercises
				exercises={exercises}
				setExercises={setExercises}
			/>
			<BodyParts setExercises={setExercises} />
			<Exercises exercises={exercises} setExercises={setExercises} />
		</div>
	);
};
