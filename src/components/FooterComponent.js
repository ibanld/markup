import React from 'react';
import { TitleBar } from 'react-desktop/macOs';
import { TitleBar as WinTitleBar } from 'react-desktop/windows';

export default function Footer({ win, setWin }) {
	return (
		<div id='footer'>
			{!win ? (
				<TitleBar>
					{' '}
					<i className='fab fa-windows fa-lg' onClick={() => setWin(!win)} />{' '}
				</TitleBar>
			) : (
				<WinTitleBar>
					<i className='fab fa-apple fa-lg' onClick={() => setWin(!win)} />
				</WinTitleBar>
			)}
		</div>
	);
}
