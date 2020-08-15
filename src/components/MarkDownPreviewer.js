import React from 'react';
import Editor from './EditorComponent';
import Preview from './PreviewComponent';

const MarkdownPreviewer = () => {
	return (
		<div className='container'>
			<Editor />
			<Preview />
		</div>
	);
};

export default MarkdownPreviewer;
