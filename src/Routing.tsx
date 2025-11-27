import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {NavBar} from './appComponents/nav/Navbar';
import {Footer} from './appComponents/nav/Footer';
import {appStore} from './appStore/appStore';
import {Login} from './pages/Login';
import {useEffect} from 'react';
import Cookies from 'js-cookie';
import {AddNewRecords} from './pages/AddNewRecords';
import {SearchRecords} from './pages/SearchRecords';
import {PatientRecordDetail} from './pages/PatientRecordDetail';

const Root: React.FC = () => {
  const isAdmin = appStore(state => state.isAdmin);
  const setIsAdmin = appStore(state => state.setIsAdmin);

  useEffect(() => {
    // Check if isAdmin cookie exists on mount
    const adminCookie = Cookies.get('isAdmin');
    if (adminCookie === 'true') {
      setIsAdmin(true);
    }
  }, [setIsAdmin]);

  const RenderAuthRoute = () => {
    if (!isAdmin) {
      return (
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      );
    } else {
      return (
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add_new_records" element={<AddNewRecords />} />
            <Route path="/search_records" element={<SearchRecords />} />
            <Route
              path="/search_records/:searchParam"
              element={<PatientRecordDetail />}
            />
          </Routes>
          <Footer />
        </Router>
      );
    }
  };

  return <>{RenderAuthRoute()}</>;
};

export default Root;
