import React, { useEffect, useState } from "react";
import Details from "./Details";
import Loader from "./Loader";
import SucessPage from "./SucessPage";
import SignInPage from "./SignInPage";
import db from "../firebase";
import { useAuth } from "../firebase";

const Form = () => {
  const currentUser = useAuth();
  const [selectedDate, handleDate] = useState(null);
  const [loader, setLoader] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    DOB: "",
    gender: "",
    mobileNo: "",
    address: "",
    pincode: "",
    district: "",
    twelthMark: "",
    tenthMark: "",
  });

  useEffect(() => {
    setUserDetails((prevValue) => {
      return {
        ...prevValue,
        DOB: selectedDate?.toLocaleDateString(),
      };
    });
  }, [selectedDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    db.collection("details")
      .add(userDetails)
      .then(() => {
        setLoader(false);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="form">
      <p>Student Registration Form</p>
      <p className="email-user">-- {currentUser?.email} --</p>
      <Loader loader={loader} />
      {signIn ? (
        submitted ? (
          <SucessPage />
        ) : (
          <Details
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            userDetails={userDetails}
            handleDate={handleDate}
            selectedDate={selectedDate}
          />
        )
      ) : (
        <SignInPage signIn={signIn} setSignIn={setSignIn} />
      )}
    </div>
  );
};

export default Form;
