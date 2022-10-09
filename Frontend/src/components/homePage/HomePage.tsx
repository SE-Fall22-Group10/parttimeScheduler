import React, {useState} from 'react';
import type {HomePageProps} from '../../interface';

const HomePage: React.FC<HomePageProps> = (props: HomePageProps): JSX.Element => {
	const [username, setUsername] = useState<string>('');

	return (
		<div>
			Home Page
		</div>
	);
};

export default HomePage;
