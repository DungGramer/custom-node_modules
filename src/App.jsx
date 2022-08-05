import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
// import Pagination from "rc-pagination";
import {Pagination} from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Pagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
      />
    </div>
  );
}

export default App;
