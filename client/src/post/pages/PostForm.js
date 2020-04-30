import React from 'react';
import usePostForm from '../../hooks/useInputForm';

import './Posts.css';

const PostForm = () => {
	const postform = () => {
		alert(`Post Created!
			   Title: ${inputs.title} 
			   Comment: ${inputs.text}`);
	};
	const { inputs, handleInputChange, handleSubmit } = usePostForm(postform);

	return (
		<div className='card card-info'>
			<div className='card-header bg-info text-white'>Add A New Post</div>
			<div className='card-body'>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<input
							value={inputs.title}
							onChange={handleInputChange}
							className='form-control form-control-sm'
							type='text'
							placeholder='Title of your post'
							style={{ marginBottom: 5 }}
							name='title'
							required
						/>
						<input
							value={inputs.photo}
							onChange={handleInputChange}
							className='form-control form-control-sm'
							type='text'
							placeholder='URL of image'
							style={{ marginBottom: 5 }}
							name='photo'
						/>
						<small
							style={{
								marginBottom: 5,
								fontSize: '11px',
								fontStyle: 'italic',
							}}
							className='form-text text-muted'>
							Paste image link here with http:// or https://
						</small>

						<textarea
							value={inputs.text}
							onChange={handleInputChange}
							placeholder='Post Details'
							className='form-control'
							rows='3'
							name='text'
							required
						/>
					</div>
					<button type='submit' className='btn btn-dark'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default PostForm;
