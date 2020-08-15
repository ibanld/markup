import React from 'react';
import { TitleBar } from 'react-desktop/macOs';
import { TitleBar as WinTitleBar } from 'react-desktop/windows';
import useSound from 'use-sound';

import winstart from '../sounds/winstart.m4a'
import macstart from '../sounds/macstart.m4a'

export default function Footer({ win, setWin, setLoading }) {
    const [winPlay] = useSound(winstart)
    const [macPlay] = useSound(macstart)

	const handleClick = () => {
		setWin(!win);
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
        }, 2000);
        win ? macPlay() : winPlay()
	};

	return (
		<div id='footer'>
			{!win ? (
				<TitleBar>
					{' '}
					<i className='fab fa-windows fa-lg' onClick={() => handleClick()} />{' '}
				</TitleBar>
			) : (
				<WinTitleBar>
					<i className='fab fa-apple fa-lg' onClick={() => handleClick()} />
				</WinTitleBar>
			)}
		</div>
	);
}
