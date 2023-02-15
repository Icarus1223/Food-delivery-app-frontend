import './App.scss';
import Routing from './routes';
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './layout'
import axios from 'axios'

axios.defaults.baseURL=`${process.env.REACT_APP_SERVER_URL}`

function App() {
 
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </div>  
  );
}

export default App;
