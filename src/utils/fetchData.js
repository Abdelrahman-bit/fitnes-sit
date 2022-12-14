const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
		"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
	},
};
export const fetchData = async (url) => {
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};
