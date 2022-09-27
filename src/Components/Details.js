import React from "react";
import { Button, MenuItem, TextField } from "@material-ui/core";
import DatePicker from "./DatePicker";

const gender = ["Male", "Female", "Others"];

const Details = ({
  handleChange,
  handleSubmit,
  userDetails,
  selectedDate,
  handleDate,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="name-field">
        <TextField
          id="standard-basic"
          name="firstName"
          value={userDetails.firstName}
          label="First Name"
          autoComplete="off"
          onChange={handleChange}
          required={true}
        />
        <TextField
          id="standard-basic"
          name="lastName"
          label="Last Name"
          value={userDetails.lastName}
          autoComplete="off"
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="parent-field">
        <TextField
          id="standard-basic"
          name="fatherName"
          label="Father Name"
          value={userDetails.fatherName}
          autoComplete="off"
          onChange={handleChange}
          required={true}
        />
        <TextField
          id="standard-basic"
          name="motherName"
          label="Mother Name"
          value={userDetails.motherName}
          autoComplete="off"
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="dob-field">
        <p>DOB</p>
        <DatePicker selectedDate={selectedDate} handleDate={handleDate} />
      </div>
      <div className="gender-field">
        <TextField
          id="standard-basic-gender"
          required={true}
          select
          name="gender"
          label="Gender"
          value={userDetails.gender}
          onChange={handleChange}
        >
          {gender.map((options) => {
            return (
              <MenuItem key={options} value={options}>
                {options}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          id="standard-basic"
          name="mobileNo"
          label="Mobile Number"
          type="number"
          required={true}
          value={userDetails.mobileNo}
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="address-field">
        <TextField
          id="standard-address-basic"
          name="address"
          label="Address"
          required={true}
          autoComplete="new-address"
          value={userDetails.address}
          style={{ width: "100%" }}
          onChange={handleChange}
        />
      </div>
      <div className="area-details">
        <TextField
          id="standard-basic"
          name="pincode"
          label="Pincode"
          required={true}
          autoComplete="new-pincode"
          value={userDetails.pincode}
          type="number"
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          name="district"
          label="District"
          required={true}
          value={userDetails.district}
          autoComplete="off"
          onChange={handleChange}
        />
      </div>
      <div className="marks-field">
        <TextField
          id="standard-basic"
          name="twelthMark"
          label="12th Mark"
          required={true}
          value={userDetails.twelthMark}
          autoComplete="off"
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          name="tenthMark"
          label="10th Mark"
          autoComplete="off"
          required={true}
          value={userDetails.tenthMark}
          style={{ width: "160px" }}
          onChange={handleChange}
        />
      </div>
      <div className="submit-button">
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Details;
