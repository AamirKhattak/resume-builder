import "./App.css";
import { DMS_DATA } from "./util/dms-report";
var _ = require('lodash');

function App() {
  console.log(DMS_DATA);
  const data =_.groupBy(_.sortBy(DMS_DATA, 'DEPARTMENT'), 'DEPARTMENT')
  console.log(data);
  return <div className="App">{}</div>;
}

export default App;
