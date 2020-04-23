import React from 'react';
import PostsList from '../components/PostsList';
const Posts = () => {
	const POSTS = [
		{
			userID: 'u1',
			name: 'Mia',
			userImage:
				'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=compress&cs=tinysrgb&dpr=2&w=750&w=1260',
			postID: 'p1',
			title: 'Taj Mahal',
			text:
				'Really a beautiful and mesmerizing place to spend your time with your loved ones. Every inch tells you one beautiful, technical n marvellous story'
		},
		{
			userID: 'u2',
			name: 'Lee',
			userImage:
				'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=compress&cs=tinysrgb&dpr=2&w=750&w=1260',
			postID: 'p2',
			title: 'Empire State Building',
			text:
				'One of the most famous sky scrapers in the world. Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.'
		}
	];
	return <PostsList items={POSTS} />;
};

export default Posts;
