import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AppContext from "../context/AppContext";
import Logo from "../assets/logo.png";

const NavBar = () => {
  const appCtx = useContext(AppContext);

  // just to see updates
  useEffect(() => {}, [
    appCtx.accessToken,
    appCtx.expirationDate,
    appCtx.role,
    appCtx.id,
    appCtx.email,
  ]);

  return (
    <div>
      <nav className="bg-indigo-800 navbar flex items-center justify-between">
        <div className="flex flex-1 items-center justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-8 w-auto mx-4" src={Logo} alt="Save The Muffin" />
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive
                  ? "bg-indigo-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  : "text-indigo-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              }
            >
              Home
            </NavLink>
            {appCtx.role === "user" && (
              <NavLink
                to="/cart"
                className={(navData) =>
                  navData.isActive
                    ? "bg-indigo-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    : "text-indigo-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
              >
                Cart
              </NavLink>
            )}
            {appCtx.role === "user" && (
              <NavLink
                to="/orders"
                className={(navData) =>
                  navData.isActive
                    ? "bg-indigo-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    : "text-indigo-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
              >
                Orders
              </NavLink>
            )}
            {appCtx.role === "merchant" && (
              <NavLink
                to="/listings"
                className={(navData) =>
                  navData.isActive
                    ? "bg-indigo-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    : "text-indigo-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
              >
                Listings
              </NavLink>
            )}
            {appCtx.role === "merchant" && (
              <NavLink
                to="/manage-orders"
                className={(navData) =>
                  navData.isActive
                    ? "bg-indigo-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    : "text-indigo-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                }
              >
                Orders
              </NavLink>
            )}
          </div>
        </div>
        <div className="flex space-x-4 mr-4 items-center">
          {appCtx.accessToken ? (
            <>
              <div className="text-white text-sm font-bold">{appCtx.email}</div>
              <NavLink
                onClick={(event) => appCtx.logOut(event)}
                className="text-indigo-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Log out
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className={(navData) =>
                navData.isActive
                  ? "bg-indigo-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  : "text-indigo-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              }
            >
              Login
            </NavLink>
          )}
          {!appCtx.accessToken && (
            <NavLink
              to="/register"
              className={(navData) =>
                navData.isActive
                  ? "bg-indigo-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  : "text-indigo-300 hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              }
            >
              Register
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
