import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

const Contact = () => {
  const namePattern = /^[a-zA-Z]{2,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^(0[1-9])(?:[ _.-]?(\d{2})){4}$/;

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (
      namePattern.test(firstName) &&
      namePattern.test(lastName) &&
      emailPattern.test(email) &&
      phonePattern.test(phone)
    ) {
      dispatch({
        type: "SET_PRO_INFORMATION",
        payload: {
          informationsPersonnelles: { firstName, lastName, email, phone },
        },
      });
    }
  }, [firstName, lastName, email, phone]);

  return (
    <>
      <h1 className="text-center lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
        Contact
      </h1>
      <form className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mt-5">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Nom
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full px-4 py-3 rounded-md font-light text-sm border ${
                errors.firstName ? "border-red-400" : "border-gray-200"
              }`}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Prénom
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full px-4 py-3 rounded-md font-light text-sm border ${
                errors.lastName ? "border-red-400" : "border-gray-200"
              }`}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className={`w-full px-4 py-3 rounded-md font-light text-sm border ${
                errors.email ? "border-red-400" : "border-gray-200"
              }`}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Téléphone
          </label>
          <div className="mt-2.5">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              className={`w-full px-4 py-3 rounded-md font-light text-sm border ${
                errors.phone ? "border-red-400" : "border-gray-200"
              }`}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
