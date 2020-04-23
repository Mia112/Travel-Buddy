import React from 'react';

import Card from '../../components/UIElememts/Card';
import Avatar from '../../components/UIElememts/Avatar';
import './PostItem.css';

const PostItem = props => {
	return (
		<li className='post-item'>
			<Card className='post-content'>
				<div className='user-image'>
					<Avatar image={props.image} alt={props.name} />
				</div>
				<div className='username text-muted'>{props.name}</div>

				<div className='card-body'>
					<h5 className='card-title'>{props.title}</h5>
					<p className='card-text'>{props.text}</p>
				</div>
				<div className='post-actions'>
					<button>Like</button>
					<button>Share</button>
					<button>Comment</button>
				</div>
			</Card>
		</li>
	);
};

export default PostItem;
