import React from "react";

import { makeStyles, TextField } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  input: {
    color: "white !important",
    borderColor: "white !important",
  },
  text: {
    color: "white !important",
    fontWeight: "bold",
  },
}));

const CustomTextField = ({
  label,
  value,
  callback,
  className,
  multi,
  error,
}) => {
  const classes = styles();
  return (
    <TextField
      type="text"
      name={label.toLowerCase()}
      label={label}
      value={value}
      onChange={callback}
      required={true}
      variant="outlined"
      className={className}
      error={error}
      fullWidth={true}
      multiline={multi}
      rows={multi ? 4 : 1}
      rowsMax={multi ? 8 : 1}
      InputProps={{
        className: classes.text,
        classes: {
          notchedOutline: classes.input,
        },
      }}
      InputLabelProps={{
        classes: {
          focused: classes.text,
        },
      }}
    />
  );
};

export default CustomTextField;
