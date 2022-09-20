import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { fetchData } from "../utils/fetchData";
import Loader from "./Loader";

const bodyPartsList = [
	{ target: "all", active: true },
	{ target: "back", active: false },
	{ target: "cardio", active: false },
	{ target: "chest", active: false },
	{ target: "lower arms", active: false },
	{ target: "lower legs", active: false },
	{ target: "neck", active: false },
	{ target: "shoulders", active: false },
	{ target: "upper arms", active: false },
	{ target: "upper legs", active: false },
	{ target: "waist", active: false },
];

const BodyParts = ({ setExercises }) => {
	const [bodyPartsState, setBodyPartsState] = useState(bodyPartsList);
	const [isLoading, setIsLoading] = useState(false);

	const bodyParts = async (bodyPart) => {
		setIsLoading(true);
		let responseData;
		if (bodyPart === "all") {
			responseData = await fetchData(
				`https://exercisedb.p.rapidapi.com/exercises`
			);
		} else {
			responseData = await fetchData(
				`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`
			);
		}
		setExercises(responseData);
		setIsLoading(false);
	};
	const handleBodyPartsClick = (target) => {
		const disactivation = bodyPartsState.map((item, index) => {
			let newOpject = Object.assign(item, { active: false });
			if (index == target) {
				item.active = true;
			}
			return newOpject;
		});
		setBodyPartsState(disactivation);
		bodyParts(bodyPartsState[target].target);
	};
	return (
		<Container sx={{ width: "100vw" }}>
			<ScrollMenu>
				{bodyPartsState.map((item, index) => (
					<Button
						key={index}
						sx={{
							backgroundColor: "#e0e0e0",
							borderRadius: 5,
							padding: 1,
							marginLeft: 2,
							color: "#333",
							textTransform: "capitalize",
							marginTop: 3,
							minWidth: "120px",
						}}
						variant={item.active ? "outlined" : "text"}
						color="error"
						onClick={() => handleBodyPartsClick(index)}
					>
						{item.target}
					</Button>
				))}
			</ScrollMenu>
			{isLoading && <Loader />}
		</Container>
	);
};

export default BodyParts;
