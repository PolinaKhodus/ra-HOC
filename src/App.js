import './App.css';
import VideoList from './components/time/VideoList';
import List from './components/highlights/List';

import list from './data/videos';
import blocks from './data/blocks';

function App() {
  return (
    <>      
      <div className="task-title">Форматирование даты публикации</div>
      <VideoList list={list} />

      <div className="task-title">Популярное и новое</div>
      <List list={blocks} />
    </>    
  );
}

export default App;
