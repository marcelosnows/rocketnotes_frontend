import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { DetailsApp } from "../pages/DetailsApp";
import { Profile } from "../pages/Profile";
import { NewNote } from "../pages/NewNote";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detailsApp/:id" element={<DetailsApp />} />
      <Route path="/newnote" element={<NewNote />} />
      <Route path="/profile" element={<Profile />} />
     
      <Route path="*" element={<Navigate to={"/"}/>} />

    </Routes>
  );
};