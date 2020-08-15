import React from 'react';
import marked from 'marked';

import { Window, TitleBar, Text } from 'react-desktop/macOs';

export default function Preview({ text }) {
	return (
		<Window chrome height='50%' width='45%' padding='1%' id='preview'>
			<TitleBar
				title='Preview'
				controls
				onCloseClick={() => console.log('Close window')}
				onMinimizeClick={() => console.log('Minimize window')}
				onMaximizeClick={() => console.log('Mazimize window')}
				onResizeClick={() => console.log('Resized window')}
			/>
			<Text dangerouslySetInnerHTML={{ __html: marked(text) }} />
		</Window>
	);
}
