import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const ManualCall = ({ children, color }) => (
	<Tabs
		defaultValue='js'
		values={[
			{ label: 'JavaScript', value: 'js' },
			{ label: 'Python', value: 'py' },
			{ label: 'Java', value: 'java' },
		]}
	>
		<TabItem value='js'>

		</TabItem>
		<TabItem value='orange'>This is an orange 🍊</TabItem>
		<TabItem value='banana'>This is a banana 🍌</TabItem>
	</Tabs>
);
