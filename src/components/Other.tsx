import React from 'react'
import Headline from '../ui/Headline'
import './Other.scss'

const Other = () => {
  const otherList: Array<string> = [
    'HCI, ユーザーインターフェースなどの分野に興味があります。',
    'モバイルオーダープラットフォームの開発・運営を行う企業にてエンジニアインターンをしています。',
    'TypeScript(React/Express/Next.js), PHP, Flutter, Swift, Python, Go, C#(Unity) などの開発経験があります。',
  ]
  return (
    <div className="Other">
      <Headline
        headline='OTHER' 
      />
      <ul>
        {otherList.map((element) => (
          <List text={element} />
        ))}
      </ul>
    </div>
  )
}

export default Other

const List = ({text}:{text: string}) => {
  return (
    <li className="List">{text}</li>
  )
}