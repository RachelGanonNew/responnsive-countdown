import './App.css';

import Timer from './components/Timer';
import Content from './components/Content';
import Header from './components/Header';
function App() {
  return (
    <div className="warpper">
      <Header className="header"></Header>
      <Content className="content"></Content>
      <Timer className="timer"  index={1} min={5} sec={0}></Timer>
      <Timer className="timer"  index={2} min={3} sec={4}></Timer>
      <Timer className="timer"  index={3} min={13} sec={2}></Timer>
    </div>
  );
}

export default App;
