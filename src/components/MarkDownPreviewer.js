import React, {useState, useEffect} from 'react';
import Navbar from './NavbarComponent'
import Editor from './EditorComponent';
import Preview from './PreviewComponent';
import Footer from './FooterComponent'

const MarkdownPreviewer = () => {
    const [win, setWin] = useState(true);
    const [text, setText] = useState('');

	return (
        <>
            <Navbar win={win} />
            <div className='container'>
                <Editor text={text} setText={setText} win={win}/>
                <Preview text={text} win={win}/>
            </div>
            <Footer win={win} setWin={setWin} />
        </>
	);
};

export default MarkdownPreviewer;
