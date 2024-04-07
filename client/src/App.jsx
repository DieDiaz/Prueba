import {Route, Routes} from 'react-router-dom';
import Exampage from './pages/exampage.jsx';
import Examform from './pages/examform.jsx';
import Notfound from './pages/Notfound.jsx';
import Navbar from './components/Navbar.jsx';
import Preguntasform from './pages/preguntasform.jsx';

function App(){
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Exampage />} />
      <Route path="/new" element={<Examform />} />
      <Route path="*" element={<Notfound />} />
      <Route path="/newp" element={<Preguntasform />} />
    </Routes>
    </>
  );
}

export default App;