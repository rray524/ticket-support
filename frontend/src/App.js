import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const PrivateRoute = React.lazy(() => import("./components/PrivateRoute"));
const NewTicket = React.lazy(() => import("./pages/NewTicket"));
const Tickets = React.lazy(() => import("./pages/Tickets"));
const Ticket = React.lazy(() => import("./pages/Ticket"));

function App() {
  const helmetContext = {};
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="loader-container">
              <div className="spinner"></div>
            </div>
          }
        >
          <div className="container">
            <HelmetProvider context={helmetContext}>
              <Header />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/new-ticket" element={<PrivateRoute />}>
                  <Route path="/new-ticket" element={<NewTicket />} />
                </Route>
                <Route path="/tickets" element={<PrivateRoute />}>
                  <Route path="/tickets" element={<Tickets />} />
                </Route>
                <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
                  <Route path="/ticket/:ticketId" element={<Ticket />} />
                </Route>
              </Routes>
            </HelmetProvider>
          </div>
        </Suspense>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
