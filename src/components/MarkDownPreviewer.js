import React, { useState } from 'react';
import Navbar from './NavbarComponent'
import Editor from './EditorComponent';
import Preview from './PreviewComponent';
import Footer from './FooterComponent'

const MarkdownPreviewer = () => {
    const [win, setWin] = useState(true);
    const [text, setText] = useState('');
    
    const bg = win ? 'url(https://hipertextual.com/files/2014/03/windows_xp_bliss-wide.jpg)' : 'url(https://cdn.spacetelescope.org/archives/images/screen/opo0501a.jpg)'
	return (
        <>
            <Navbar win={win} />
            <div className='container' style={{backgroundImage: bg}}>
                <Editor text={text} setText={setText} win={win}/>
                <Preview text={text} win={win}/>
            </div>
            <Footer win={win} setWin={setWin} />
        </>
	);
};

export default MarkdownPreviewer;
