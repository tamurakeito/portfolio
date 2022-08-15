import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
      <div className="Footer">
       <div className='ContactBox'>
        {/* <Contact
            url='mailto:keito.tamura.s1@dc.tohoku.ac.jp'
            src='mail.png'
            alt='mail'
        /> */}
        <Contact
            url='https://qiita.com/kit_tamtam'
            src='qiita.png'
            alt='qiita'
        />
        <Contact
            url='https://www.facebook.com/profile.php?id=100071689022661'
            src='facebook.png'
            alt='facebook'
        />
       </div>
        <p>©︎tamurakeito</p>
      </div>
    )
}
  
export default Footer

const Contact = (
    {
        url,
        src,
        alt,
    }:{
        url: string
        src: string
        alt: string
    }
) => {
    return (
        <div className='Contact'>
            <a className={alt} href={url}>
                <img  src={process.env.PUBLIC_URL+`/images/`+src} alt={alt}/>
            </a>
        </div>
    )
}