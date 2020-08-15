import React from 'react'
import { ProgressCircle } from 'react-desktop/macOs';
import { ProgressCircle as WinProgressCircle} from 'react-desktop/windows';

export default function Loading({win}) {
    return (
        <>
            {win ? <ProgressCircle color='black' size={100} /> : <WinProgressCircle color='black' size={100} />}
        </>
    )
}
