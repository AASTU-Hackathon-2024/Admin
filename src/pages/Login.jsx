import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-2">Login to Account</h1>
        <p className="text-gray-500 text-center mb-8">
          Please enter your email and password to continue
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email address:
            </label>
            <input
              type="email"
              placeholder="esteban_schiller@gmail.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm text-gray-600">Password</label>
              <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-blue-500">
                Forget Password?
              </Link>
            </div>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
              Remember Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:text-blue-600">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;