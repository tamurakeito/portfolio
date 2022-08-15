import './Update.scss'

const Update = ({
    year,
    month,
    date,
}:{
    year: number
    month: number
    date: number
}) => {
  return (
    <div className="Update">最終更新：{year}.{month}.{date}</div>
  );
}
  
export default Update