import React from 'react';
import PostItem from './PostItem';
import Card from '../../components/UIElememts/Card';
import './PostsList.css';
const PostsList = props => {
	return (
		<div className='container'>
			{props.items.length === 0 ? (
				<div className='post-list center'>
					<Card>
						<h2>No Post Yet. Click the button to create one</h2>
						<button>Add Post</button>
					</Card>
				</div>
			) : (
				<ul className='post-list'>
					{props.items.map(post => (
						<PostItem
							key={post.id}
							userID={post.userID}
							postID={post.postID}
							image={post.userImage}
							name={post.name}
							title={post.title}
							text={post.text}
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default PostsList;
