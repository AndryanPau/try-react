import styles from './menu.module.css';
import { Link } from 'react-router-dom';

let data = require('../../data/menu.json');

const CreateMenu = () => {
  let menuList = [];
  for(let i=0; i<data.data.length; i++){
    menuList.push(
      <div className={styles.item} key={data.data[i].id}>
        <Link to={data.data[i].path}>{data.data[i].name}</Link>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      <nav>
        {menuList}
      </nav>
    </div>
  )
}

export default CreateMenu;
