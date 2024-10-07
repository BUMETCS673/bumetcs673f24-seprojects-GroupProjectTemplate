export const box = {
  top: "4rem",
  right: 0,
  bottom: 0,
  width: "80%",
  padding: "2%",
  borderRadius: "10px",
  height: "calc(100vh - 4rem)",
  overflowY: "auto",
};

export const title = {
  marginTop: "4%",
  marginBottom: "2%",
  color: "#5B5753",
  fontSize: "1.4rem",
  fontWeight: "600",
};

export const inputLable = {
  marginLeft: "-1%",
  backgroundColor: "#5E5E5E", // question font background color
  padding: "0 3%",
  color: "#CACACA", // font color when unfocused
  borderRadius: "10px",
  fontWeight: "bold",
  "&.Mui-focused": {
    // label - font color when focused
    color: "#F8DEBD",
    fontWeight: "bold",
    borderRadius: "10px",
  },
};

export const inputBackground = {
  backgroundColor: "#5E5E5E",
  borderRadius: "10px",
  "& .MuiInputBase-input": {
    color: "#F4F4F4", // text in box(answer) - text color
    border: "none",
  },
};

// dropdown
export const menuPropsStyles = {
  PaperProps: {
    sx: {
      backgroundColor: "#6F6F6F",
      color: "#F4F4F4",
    },
  },
};

export const inputLabelProps = {
  sx: {
    backgroundColor: "#5E5E5E", // question font background color
    padding: "0 2%",
    color: "#CACACA", // font color when unfocused
    borderRadius: "10px",
    "&.Mui-focused": {
      // font color when focused
      color: "#F8DEBD",
      borderRadius: "10px",
    },
  },
};

export const submitButton = {
  backgroundColor: "#3A3A3A",
  color: "#CACACA",
  borderRadius: "10px",
  padding: "1% 4%",
  "&:hover": {
    backgroundColor: "#F8DEBD",
    color: "#303030",
  },
};

export const textField = {
  backgroundColor: "#5E5E5E",
  borderRadius: "10px",
  "& .MuiInputBase-input": {
    color: "#F4F4F4", // input color
  },
  "& .MuiInputLabel-root": {
    color: "#CACACA", // label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#F8DEBD", // focused label color
  },
  "& .MuiFilledInput-underline:before": {
    borderBottom: "none", // no underline when unfocused
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#F8DEBD", // underline color when focused
  },
  "& .MuiInputAdornment-root": {
    color: "#F4F4F4", // hour color
  },
  "& .MuiFilledInput-root:hover:before": {
    borderBottom: "none !important",
  },
};

// DailyData
export const datePick = {
  width: "35%",
  marginTop: "2%",
  marginBottom: "3%",
  backgroundColor: "transparent",

  "& .MuiInputBase-root": {
    borderRadius: "50px",
    border: "2px solid #5E5E5E",
  },
  "& .MuiInputBase-input": {
    color: "#6F6F6F",
    textAlign: "center",
    fontWeight: "bold",
  },
  "& .MuiInputLabel-root": {
    color: "#5E5E5E", // label color
    paddingLeft: "5%",
    fontWeight: "bold",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#5E5E5E", // focused label color
    fontWeight: "bold",
  },
  "& .MuiFilledInput-underline:before": {
    borderBottom: "none", // no underline when unfocused
  },
  "& .MuiFilledInput-underline:after": {
    borderBottom: "none", // no underline when focused
  },
  "& .MuiFilledInput-root:hover:before": {
    borderBottom: "none !important",
  },
};

export const calendarStyle = {
  mt: 2,
  mb: 2,
  backgroundColor: "transparent",
  boxShadow: "none",
  marginBottom: "4%",
};


//ManageDailyData
export const dailyDataEntryCard = {
  marginBottom: "1em",
  padding: ".5em",
  borderColor: "gray",
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: "10px",
}

export const dailyDataEntryCardHeader = {
  fontWeight: "bold"
}

export const dailyDataEntryCardDelete = {
  color: "red",
  fontSize: ".6em",
  fontWeight: "bold",
  cursor: 'pointer',
  marginBottom: '.5em',
}


// DailyData - side menu
export const sideMenuBox = {
  position: "absolute",
  top: "4rem",
  right: 0,
  bottom: 0,
  width: "35%",
  padding: "2%",
  backgroundColor: "#303030",
  borderRadius: "10px",
  color: "white",
  height: "calc(100vh - 4rem)",
  overflowY: "auto",
};

export const sideMenuTitle = {
  marginTop: "2%",
  marginBottom: "2%",
  color: "#E2E1E1",
  fontSize: "1.4rem",
  fontWeight: "600",
};

// Login Page
export const loginBox = {
  width: "80%",
  display: "flex",
  justifyContent: "center",
  padding: "2%",
  borderRadius: "10px",
  height: "calc(100vh - 8rem)",
  alignItems: "center",
  flexDirection: "column",
};

export const loginSubmitButton = {
  backgroundColor: "#3A3A3A",
  color: "#CACACA",
  borderRadius: "10px",
  padding: "2% 24%",
  "&:hover": {
    backgroundColor: "#F8DEBD",
    color: "#303030",
  },
};

export const link = {
  color: "#D08726",
};

// HomePage & ViewUsers
export const bigTitle = {
  marginTop: "4%",
  marginBottom: "2%",
  color: "#5B5753",
  fontSize: "3rem",
  fontWeight: "600",
};


//Dashboard
export const dashboardLineChartContainer = {
  width: "600px",
  height: "200px",
  marginBottom: "50px"
}



