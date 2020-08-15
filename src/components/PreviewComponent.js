import React from 'react';
import marked from 'marked';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import { TitleBar as WinTitleBar, Text as WinText, Window as WinWindow } from 'react-desktop/windows';

export default function Preview({ text, win }) {
	return (
        <>
            {!win ? (
                <Window chrome height='50%' width='45%' padding='1%' id='preview'>
                    <TitleBar
                        title='Preview'
                        controls
                    />
                    <Text dangerouslySetInnerHTML={{ __html: marked(text) }} />
                </Window>
            ) : (
                <WinWindow chrome height='50%' width='45%' padding='0%' theme='dark' background='white' id='win-preview'>
                    <WinTitleBar
                        title='Preview'
                        controls
                    />
                    <WinText dangerouslySetInnerHTML={{ __html: marked(text) }}/>
                </WinWindow>
            )}
        </>
	);
}
