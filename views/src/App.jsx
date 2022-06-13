import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <div>
      <Helmet>
        <link
          href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css'
          rel='stylesheet'
        />
      </Helmet>
      <Navbar />
    </div>
  );
};

export default App;
