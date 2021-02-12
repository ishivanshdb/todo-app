import React from "react";
import { FaPizzaSlice } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todo List Logo" />
        </div>
        <div className="settings">
          <ul>
            <li datatest-id="quick-add-task-action" className="settings__add">
              +
            </li>
            <li datatest-id="dark-mode-action" className="settings__darkmode">
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
