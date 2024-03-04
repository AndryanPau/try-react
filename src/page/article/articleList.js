import styles from './articleList.module.css';
import { useNavigate } from 'react-router-dom';

let data = require('../../data/articleList.json');

const ArticleList = () => {
  let content = [];
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/articleList/${id}`);
  };

  data.data.forEach(item =>{
    content.push(
      <div className={styles.content} key={item.id} onClick={()=>handleClick(item.id)}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.sinopsis}>{item.sinopsis}</p>
      </div>
    )
  })
  
  return (
    <div className={styles.container}>{content}</div>
  )
}

export default ArticleList;
