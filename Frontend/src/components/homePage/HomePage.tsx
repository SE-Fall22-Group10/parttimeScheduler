import React, {useState} from 'react';
import type {HomePageProps} from '../../interface';

const HomePage: React.FC<HomePageProps> = (props: HomePageProps): JSX.Element => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	return (
		// Profile bar
		<div>
			{props.userData?.username}
		</div>
	);
};

export default HomePage;
