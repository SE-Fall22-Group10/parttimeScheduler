import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import type {HomePageProps} from '../../interface';

const HomePage: React.FC<HomePageProps> = (props: HomePageProps): JSX.Element => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	return (
		<div>
		</div>
	);
};

export default HomePage;
