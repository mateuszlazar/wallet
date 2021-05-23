import * as React from "react";
import { Button } from "@material-ui/core";
import { postPortfolio } from "src/services/portfolio";

export const AddPortfolio: React.FC<any> = () => {
  return (
    <Button
      variant="outlined"
      size="medium"
      color="primary"
      onClick={() => postPortfolio("test")}
    >
      Create new portfolio
    </Button>
  );
};
