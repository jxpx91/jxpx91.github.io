import React from 'react';
import Button from '@mui/material/Button';

export default function DownloadResumeButton() {
    const fileUrl = process.env.PUBLIC_URL + 'resume.pdf';

    return (
        <Button variant="contained" color="primary" component="a" href={fileUrl} download sx={{margin: 4}}>
            Download CV
        </Button>
    );
}