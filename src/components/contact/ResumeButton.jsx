import React from 'react'
import "./resumeButton.scss";

const ResumeButton = () => {

    const handleDownload = () => {
        const resumePdfUrl =  process.env.PUBLIC_URL + '/ManuResume.pdf';
        const link = document.createElement('a');
        link.href = resumePdfUrl;
        link.download = 'ManuResume.pdf';
        link.click();
    }

  return (
    <div className='button'>
        <button onClick={handleDownload}>Download Resume</button>
    </div>
  )
}

export default ResumeButton;