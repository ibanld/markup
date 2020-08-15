import React, {useState, useEffect} from 'react';
import Navbar from './NavbarComponent'
import Editor from './EditorComponent';
import Preview from './PreviewComponent';

const MarkdownPreviewer = () => {
    const [text, setText] = useState('');

	return (
        <>
            <Navbar />
            <div className='container'>
                <Editor text={text} setText={setText} />
                <Preview text={text} />
            </div>
        </>
	);
};

export default MarkdownPreviewer;
