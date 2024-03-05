import {
    makeStyles,
    shorthands
  } from "@fluentui/react-components";

export const useStyles = makeStyles({
    input: {
      display: "flex",
      flexDirection: "column",
      width:"300px",
      height:"40px",
      backgroundColor:"#F6F6F6",
      ...shorthands.margin("100px"),
      ...shorthands.border("1px","solid","black"),
      ...shorthands.borderRadius("10px"),
      ...shorthands.borderColor("#33CC99"),
    },
  });