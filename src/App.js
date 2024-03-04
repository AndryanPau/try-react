import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Menu from './component/menu/menu';
import Article from './page/article/article';
import ArticleList from './page/article/articleList';
import TableBtth from './page/table/table';

const MainPage = () => {
  return (
    <section>
      <Router>
          <Menu />
          <Routes>
            <Route exact path="/articleList" element={<Outlet />}>
              <Route index element={<ArticleList />} />
              <Route path=":id" element={<Article />} />
            </Route>
            <Route exact path="/table" element={<TableBtth />}></Route>
          </Routes>
      </Router>
    </section>
  )
}

export default MainPage;
