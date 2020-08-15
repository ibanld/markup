import React, { useState } from 'react';
import Navbar from './NavbarComponent'
import Loading from './LoadingComponent';
import Editor from './EditorComponent';
import Preview from './PreviewComponent';
import Footer from './FooterComponent';

const MarkdownPreviewer = () => {
    const [win, setWin] = useState(false);
    const [text, setText] = useState('');
    const [loading, setLoading ] = useState(false);
    
    const bg = win ? 'url(https://hipertextual.com/files/2014/03/windows_xp_bliss-wide.jpg)' : 'url(https://cdn.spacetelescope.org/archives/images/screen/opo0501a.jpg)'
	return (
        <>
            <Navbar win={win} />
            <div className='container' style={{backgroundImage: bg}}>
                {loading ? <Loading win={win} /> :
                    <>
                        <Editor text={text} setText={setText} win={win}/>
                        <Preview text={text} win={win}/>
                    </>
                }
            </div>
            <Footer win={win} setWin={setWin} setLoading={setLoading} />
        </>
	);
};

export default MarkdownPreviewer;
