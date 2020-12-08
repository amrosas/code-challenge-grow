import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes.jsx';
import PageLayout from './components/PageLayout'

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes/>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
