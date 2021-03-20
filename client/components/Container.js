import { Container } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export default withStyles((theme) => ({
  root: {
    [theme.breakpoints.up(1025)]: {
      padding: "150px 0",
    },
    padding: "150px 10%",
  },
}))(Container);
