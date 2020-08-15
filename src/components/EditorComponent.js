import React from 'react';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import { TitleBar as WinTitleBar } from 'react-desktop/windows';

export default function Editor({ text, setText }) {
	return (
		<Window chrome height='50%' width='45%' padding='0%'>
			<TitleBar
				title='Editor'
				controls
				onCloseClick={() => console.log('Close window')}
				onMinimizeClick={() => console.log('Minimize window')}
				onMaximizeClick={() => console.log('Mazimize window')}
				onResizeClick={() => console.log('Resized window')}
			/>
			<Text>
				<textarea
					id='editor'
					name='text'
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder='Type here'
					autoCapitalize='on'
					spellCheck
					wrap='soft'
				/>
			</Text>
		</Window>
	);
}
