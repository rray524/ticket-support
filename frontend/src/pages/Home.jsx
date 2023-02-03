import React from "react";
import { Helmet } from "react-helmet-async";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Programming Hero Support - Home page</title>
        <meta
          name="description"
          content="we provide support to our loyal customers through this platform"
        />
      </Helmet>
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create New Ticket
      </Link>

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> View My Tickets
      </Link>
    </>
  );
};

export default Home;
