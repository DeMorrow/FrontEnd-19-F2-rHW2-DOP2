import { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import './style.css'

function App() {
  const [data, setData] = useState({});
  return (
    <div>
  
      <Form data={data} setData={setData}/>
      <Table  data={data}/>

    </div>
  );
}

export default App;
