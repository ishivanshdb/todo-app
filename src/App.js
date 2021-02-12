import React from "react";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import "./App.scss";

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div>
        <header>
          <Header />
          <Sidebar />
        </header>
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);
