import styles from './article.module.css';
import { useParams } from 'react-router-dom';

let data = require('../../data/article.json');

const Article = (props) => {
  const params = useParams();

  const content = (
    <div className={styles.container}>
      <h1>{data.data[params.id - 1].title}</h1>
      <p>{data.data[params.id - 1].content}</p>
    </div>
  )

  return content
}

export default Article;
