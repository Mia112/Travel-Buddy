import { useState } from 'react';

const usePostForm = (props) => {
	const [inputs, setInputs] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputs);

		if (inputs.text === '' || inputs.title === '' || inputs.photo === '') {
			setInputs({ error: 'Please enter all fields' });
		} else {
			const newPost = {
				text: inputs.text,
				title: inputs.title,
				photo: inputs.photo,
			};
			console.log(newPost);

			props.addPost(newPost);
			setInputs({ text: '', title: '', photo: '' });
		}
	};
	const handleInputChange = (e) => {
		e.persist();
		setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
	};

	return {
		handleSubmit,
		handleInputChange,
		inputs,
	};
};
export default usePostForm;
