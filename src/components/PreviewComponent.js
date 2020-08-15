import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import { TitleBar as WinTitleBar, Text as WinText, Window as WinWindow } from 'react-desktop/windows';

export default function Preview({ text, win }) {
	return (
        <>
            {!win ? (
                <Window chrome height='50%' width='45%' padding='1%' >
                    <TitleBar
                        title='Preview'
                        controls
                    />
                    <Text id='preview' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(text) )}} />
                </Window>
            ) : (
                <WinWindow chrome height='50%' width='45%' theme='dark' background='white' >
                    <WinTitleBar
                    
                        title='Preview'
                        controls
                    />
                    <WinText>
                        <div id='win-preview' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(text) )}}></div>
                    </WinText>
                </WinWindow>
            )}
        </>
	);
}
