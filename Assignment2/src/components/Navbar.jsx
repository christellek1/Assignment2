import { FaMoon } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: '#3251D0' }}>
      {/* Title of the Navbar: User Management */}
      <h1 className="text-lg font-semibold text-white">User Management</h1>

      <div className="flex items-center gap-3">
        {/* Button for creating a new user, styled with the color #3251D0 */}
        <button className="px-3 py-2 bg-white text-[#3251D0] rounded shadow text-sm">
          Create User
        </button>

        {/* Logout button styled with red color #fb2c35 */}
        <button 
          className="px-4 py-2 rounded shadow hover:bg-red-700 text-sm text-white"
          style={{ backgroundColor: '#fb2c35' }} 
        >
          Logout
        </button>

        {/* Moon icon for night mode */}
        <FaMoon className="text-white text-base cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
