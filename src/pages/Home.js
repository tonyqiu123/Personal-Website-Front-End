import React, { useEffect, useState } from 'react'
import '../css/home.css';
import '../css/all.css'
import AnimatedPage from '../components/AnimatedPage'

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatedPage>
        {loading && 
          <div className='homeContainer'>
            <div className='loadingSkeleton'></div>
            <div className='loadingSkeleton'></div>
            <div className='loadingSkeleton'></div>
            <div className='loadingSkeleton'></div>
          </div>
          }
        <div className='homeContainer'>
          <a onLoad={() => setLoading(false)} href="https://brightbearsinfo.com/"  target="_blank" className='HomeProjectContainer'>
              <img src="https://cdn.discordapp.com/attachments/715319623637270638/1064087964411498616/image_34.png" />
          </a>
          <a onLoad={() => setLoading(false)} href="https://tonyswebdesigns.ca/"   target="_blank" className='HomeProjectContainer'>
              <img src="https://cdn.discordapp.com/attachments/715319623637270638/1064087964084359188/image_27.png" />
          </a>
          <a onLoad={() => setLoading(false)} href="https://sipapp.io/"  target="_blank" className='HomeProjectContainer'>
              <img src="https://cdn.discordapp.com/attachments/715319623637270638/1064087963815907399/image_26.png" />
          </a>
          <a onLoad={() => setLoading(false)} href="https://friendaccounting.com/en/index"  target="_blank" className='HomeProjectContainer'>
              <img src="https://cdn.discordapp.com/attachments/715319623637270638/1064087963534905414/image_24.png" />
          </a>
 
        </div>
    </AnimatedPage>
  );
}