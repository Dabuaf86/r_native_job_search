import { useEffect, useState } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const options = {
		method: 'GET',
		url: `https://jsearch.p.rapidapi.com/${endpoint}`,
		headers: {
			'X-RapidAPI-Key': '98b7abf5d1msh8f19ef6d3f82ef2p1c1ff2jsn6c6fffd2db74',
			'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
		},
		params: { ...query },
	};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await axios.request(options);
			setData(response.data.data);
			setIsLoading(false);
		} catch (error) {
			setError(error);
			alert("There's been an error");
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => {
		setIsLoading(true);
		fetchData();
	};

	return { data, isLoading, error, refetch };
};

export default useFetch;
