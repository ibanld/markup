import React from 'react';
import { TitleBar } from 'react-desktop/macOs';
import { TitleBar as WinTitleBar } from 'react-desktop/windows';

export default function Navbar({ win }) {
	return (
		<div id='navbar'>
			{!win ? (
				<TitleBar title='MarkUp! - New Document' />
			) : (
				<WinTitleBar title='MarkUp! - New Document' theme='dark' />
			)}
		</div>
	);
}
