import logo from '@/assets/Logo.png';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {appStore} from '@/appStore/appStore';

export const NavBar = () => {
  const navigation = useNavigate();
  const isAdmin = appStore(state => state.isAdmin);
  const setIsAdmin = appStore(state => state.setIsAdmin);

  const handleHomeClick = () => {
    if (
      window.location.pathname !== '/home' &&
      window.location.pathname !== '/'
    ) {
      setTimeout(() => {
        navigation('/home');
        scrollTo(0, 0);
      }, 250);
    }
  };

  const logout = () => {
    setTimeout(() => {
      setIsAdmin(false);
      Cookies.set('isAdmin', 'false', {expires: 7}); // Cookie expires in 7 days
    }, 400);
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-white py-1 shadow-md"
      role="navigation"
      aria-label="Main navigation">
      <div className="xxxs:px-6 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="xxxs:h-20 flex h-16 items-center justify-between">
          <button
            onClick={handleHomeClick}
            className="xxxs:space-x-3 flex cursor-pointer items-center space-x-2 transition-all hover:opacity-80 active:scale-95"
            aria-label="Go to home">
            <div className="flex shrink-0 items-center justify-center rounded-full bg-blue-300">
              <img
                src={logo}
                alt="Medical Caduceus Logo"
                className="xxxs:h-20 xxxs:w-20 h-16 w-16 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="xxxs:text-base text-sm leading-tight font-bold text-blue-600 md:text-lg">
                ABVRCC
              </span>
              <span className="xxxs:text-sm text-xs text-gray-600">
                Patient Records
              </span>
            </div>
          </button>

          {isAdmin && (
            <div className="xxxs:space-x-6 flex items-center space-x-4">
              <a
                href="#admin-panel"
                className="xxxs:text-base text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 hover:underline"
                aria-label="Admin panel link">
                Admin
              </a>
              <button
                onClick={logout}
                className="xxxs:text-base cursor-pointer text-sm font-medium text-blue-600 transition-all hover:text-blue-800 hover:underline active:scale-95"
                aria-label="Logut button">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
