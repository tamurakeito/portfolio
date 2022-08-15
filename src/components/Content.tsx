import React from 'react'
import Headline from '../ui/Headline'
import './Content.scss'

function Content() {
  return (
    <div className="Content">
      <Headline headline='PORTFOLIO'/>
      <div className='CardBox'>
        <Card
          url='https://apps.apple.com/us/app/医学生向け試験対策アプリ-しけ鯛/id1518229698'
          img='shiketai.jpg'
          title='医学生向け試験対策アプリ（iOS）'
          details='症状の臨床経過と検査結果のヒントから疾患を当てるゲームを自分の勉強用に作りました。
          東北大医学部の臨床試験科目の過去問をクイズ形式で解けるメニューもあります。
          SwiftUIを用いて開発、データベースはFirebaseを使っています。'
        />
        <Card
          url='https://drip-and-chill.shop/'
          img='dripandchill.jpg'
          title='コーヒー豆のオンライン販売サイト'
          details='趣味で始めたコーヒー豆の焙煎を、オンラインで販売しています。販売ページはHTML/CSS/JavaScriptで作成、決済はオンライン決済サービスPAY.JP（PAY株式会社）のAPIをPHPで実装しています。'
        />
      </div>
    </div>
  )
}

export default Content

const Card = ({
  url,
  img,
  title,
  details
}:{
  url: string
  img: string
  title: string
  details: string
}) => {
  return (
    <a href={url} className="Card">
      <div className="image-box">
        <img src={process.env.PUBLIC_URL+`/images/`+img} alt={title}/>
      </div>
      <div className='title'>{title}</div>
      <p>{details}</p>
    </a>
  )
}