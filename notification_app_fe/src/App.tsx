import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Notifications from "./pages/Notifications";
import PriorityNotifications from "./pages/PriorityNotifications";

import API from "./services/api";

function App() {
  const [notifications, setNotifications] =
    useState<any[]>([]);

  const [viewed, setViewed] =

    useState<string[]>([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await API.get(
        "/notifications?limit=10&page=1"
      );

      console.log(res.data);

      setNotifications(
        res.data.notifications
      );
    } catch (error: any) {
      console.log(error.response);

      alert("API Fetch Failed");
    }
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
          <Notifications
  notifications={notifications}
  viewed={viewed}
  setViewed={setViewed}
/>
          }
        />

        <Route
          path="/priority"
          element={
          <PriorityNotifications
  notifications={notifications}
  viewed={viewed}
  setViewed={setViewed}
/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;