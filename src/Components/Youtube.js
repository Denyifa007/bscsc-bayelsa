import React from 'react';
import '../Style/Youtube.css'

 const Youtube=()=> {
  return (
    <div id='youtube' className="ratio ratio-21x9">
      <iframe
        src="https://www.youtube.com/embed/3WhyaaqmmNw"
        title="YouTube video"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default Youtube
