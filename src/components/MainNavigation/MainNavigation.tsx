import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { SampleContext } from "@src/contexts/SampleContext";

export const MainNavigation: FC = () => {
  const { login, logout, user } = React.useContext(SampleContext);

  return (
    <header>
      <div className="header">
        <nav role="navigation" className="header__navigation">
          <ul className="header__navigation__left">
            <li className="header__navigation__item">
              <NavLink to="/" className="header__logo">
                <img src={require("../../images/logo.svg")} alt="Logo" />
              </NavLink>
            </li>
          </ul>
          <ul className="header__navigation__right">
            <li className="header__navigation__item">
              <div>
                {user && user.firstName ? (
                  <>
                    <div>
                      <small>Signed in as {user.firstName}</small>
                    </div>
                    <a onClick={logout}>Sign out</a>
                  </>
                ) : (
                  <>
                    <a onClick={login}>Sign in</a>
                  </>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
