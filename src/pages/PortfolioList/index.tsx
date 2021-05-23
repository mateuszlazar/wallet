import * as React from "react";
import { Link } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { List as Placeholder } from "react-content-loader";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { withAuthorization } from "src/components/AuthContext";
import { getPortfolioList } from "src/services/portfolio";
import { AddPortfolio } from "./AddPortfolio";

const PortfolioList: React.FC<any> = () => {
  const [portfolioList, loading, error] = useCollection(getPortfolioList());

  if (error) return null;
  if (!portfolioList || loading)
    return (
      <Card>
        <CardContent>
          <Placeholder />
        </CardContent>
      </Card>
    );

  return (
    <>
      {portfolioList.docs.length === 0 ? (
        <div>You don't have any portfolio yet.</div>
      ) : (
        <Grid container justify="center" spacing={3}>
          {portfolioList.docs.map((portfolio: any) => (
            <Grid item md>
              <Link to={`/portfolio/${portfolio.id}`}>
                <Card>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {portfolio.data().name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
      <AddPortfolio />
    </>
  );
};

export default withAuthorization(PortfolioList);
