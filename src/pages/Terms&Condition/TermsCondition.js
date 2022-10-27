import React from "react";
import { Link } from "react-router-dom";

const TermsCondition = () => {
  return (
    <div className="text-center lg:w-7/12 m-auto">
      <h1 className="text-5xl my-12">Terms&Condition</h1>
      <p className="mb-5">
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: “Client”, “You” and
        “Your” refers to you, the person log on this website and compliant to
        the Company's terms and conditions. “The Company”, “Ourselves”, “We”,
        “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”,
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client's needs in respect of
        provision of the Company's stated services, in accordance with and
        subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to same. Cookies We employ the use of cookies. By accessing
        Website Name, you agreed to use cookies in agreement with the Company
        Name's Privacy Policy. Most interactive websites use cookies to let us
        retrieve the user's details for each visit. Cookies are used by our
        website to enable the functionality of certain areas to make it easier
        for people visiting our website. Some of our affiliate/advertising
        partners may also use cookies. License Unless otherwise stated, Company
        Name and/or its licensors own the intellectual property rights for all
        material on Website Name. All intellectual property rights are reserved.
        You may access this from Website Name for your own personal use
        subjected to restrictions set in these terms and conditions.
      </p>
      <button className=" text-white py-2 px-4 bg-sky-500 hover:bg-sky-700">
        <Link to="/register">Register page</Link>
      </button>
    </div>
  );
};

export default TermsCondition;
