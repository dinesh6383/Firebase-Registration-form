import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

const DatePicker = ({ handleDate, selectedDate }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        clearable
        value={selectedDate}
        required={true}
        placeholder="DD/MM/YYYY"
        onChange={(date) => handleDate(date)}
        minDate={new Date("1991-01-01")}
        maxDate={new Date()}
        format="MM/dd/yyyy"
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
