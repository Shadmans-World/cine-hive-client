import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context API/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const links = (
    <>
      <li className="mr-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/allmovies">All Movies</NavLink>
      </li>

      {user ? (
        <>
          <li className="mr-2">
            <NavLink to="/addmovies">Add Movies</NavLink>
          </li>
          {/* modify the myfav link as i am giving you chatgpt */}

          <li className="mr-2">
            <NavLink to={`/myfavorites`}>My Favorites</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li className="mr-2">
        <NavLink to="/upcoming-releases">Upcoming Releases</NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {});
  };
  return (
    <div className="navbar-text px-5 sticky z-10 top-0 bg-gray-900 text-white  bg-opacity-70">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <img src="/watching-a-movie.png" alt="logo" className="w-10 md:hidden md:ml-2"/>
          <a className="md:ml-2 lg:ml-0 text-3xl font-bold  hidden md:block ">CINE <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-red-500 bg-clip-text text-transparent">HIVE</span></a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          {user ? (
            user.photoURL ? (
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <span className="absolute top-0 z-10  right-11 w-max bg-opacity-50 text-black text-sm text-center rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-normal max-w-32 overflow-hidden">
                  {user.displayName}
                  <button onClick={handleLogOut} className="btn">
                    Log out
                  </button>
                </span>
              </div>
            ) : (
              <FaRegUserCircle className="text-2xl" />
            )
          ) : (
            <FaRegUserCircle className="text-2xl" />
          )}
          {user ? (
            <p></p>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/auth/login" className="btn">
              Sign in
            </Link>
            <Link to="/auth/register" className="btn">
            Register
          </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
