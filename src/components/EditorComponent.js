import React from 'react';
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import { TitleBar as WinTitleBar, Text as WinText, Window as WinWindow } from 'react-desktop/windows';

export default function Editor({ text, setText, win }) {
	return (
        <>
        {!win ? (
            <Window chrome height='50%' width='45%' padding='0%'>
                    <TitleBar
                        title='Editor'
                        controls
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
			) : (
                <WinWindow chrome height='50%' width='45%' padding='0%' theme='dark'>
                    <WinTitleBar
                        title='Editor'
                        controls
                    />
                    <WinText
                    >
                        <textarea
                            id='win-editor'
                            name='text'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder='Type here'
                            autoCapitalize='on'
                            spellCheck
                            wrap='soft'
                        />
                    </WinText>
                </WinWindow>
			)}
		</>
	);
}
