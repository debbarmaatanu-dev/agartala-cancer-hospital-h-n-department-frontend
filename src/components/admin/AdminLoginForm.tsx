import {appStore} from '@/appStore/appStore';
import Cookies from 'js-cookie';
import {useEffect, useState} from 'react';

type AdminLoginFormProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AdminLoginForm({
  setLoading,
  success,
  setSuccess,
}: AdminLoginFormProps): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  // Forgot password states
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const setIsAdmin = appStore(state => state.setIsAdmin);

  const handleSubmit = () => {
    setLoading(true);
    console.log('Login attempted with:', {email, password});
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 500);
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setIsAdmin(true);
        Cookies.set('isAdmin', 'true', {expires: 7}); // Cookie expires in 7 days
      }, 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  const handleForgotPasswordSubmit = () => {
    console.log('Password reset attempted with:', {
      registeredEmail,
      newPassword,
      confirmPassword,
    });
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  if (isForgotPassword) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md rounded-lg bg-gray-300 p-8 shadow-lg">
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
            Forgot Password
          </h1>

          <div className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Enter Registered Email"
                value={registeredEmail}
                onChange={e => setRegisteredEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
            </div>

            <div className="relative">
              <input
                type={showNewPassword ? 'text' : 'password'}
                placeholder="Enter New Password"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
              <button
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-gray-800">
                <i
                  className={`fa-solid ${showNewPassword ? 'fa-eye' : 'fa-eye-slash'} cursor-pointer text-center text-sm font-medium`}></i>
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:outline-none"
              />
              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-gray-800">
                <i
                  className={`fa-solid ${showConfirmPassword ? 'fa-eye' : 'fa-eye-slash'} cursor-pointer text-center text-sm font-medium`}></i>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsForgotPassword(false)}
                className="cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600">
                Back to Login
              </button>
            </div>

            <button
              onClick={handleForgotPasswordSubmit}
              className="w-full cursor-pointer rounded-md bg-blue-600 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-800">
              Reset Password
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-gray-300 p-8 shadow-lg">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
          ADMIN LOG IN
        </h1>

        <div className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 hover:text-gray-800">
              <i
                className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'} cursor-pointer text-center text-sm font-medium`}></i>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsForgotPassword(true)}
              className="cursor-pointer text-sm font-medium text-gray-700 hover:text-blue-600">
              Forgot Password
            </button>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900">
              {/* <i className="fa-brands fa-google"></i>
              <span>{''} Google Login</span> */}
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full cursor-pointer rounded-md bg-blue-600 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-800">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
