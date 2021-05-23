import * as React from "react";
import { Container } from "@material-ui/core";
import { withAuthorization } from "src/components/AuthContext";
import { withRouter, useParams } from "react-router-dom";
import {
  getPortfolioById,
  getPortfolioAssetsById,
} from "src/services/portfolio";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

const Portfolio: React.FC<any> = () => {
  const { id } = useParams<any>();
  const [portfolio, loading, error] = useDocument(getPortfolioById(id));
  const [snapshot, l, e] = useCollection(getPortfolioAssetsById(id));
  console.log(snapshot);
  return (
    <Container maxWidth={"lg"}>
      {" "}
      {portfolio && <span>Collection: {JSON.stringify(portfolio.data())}</span>}
      <br />
      {snapshot && (
        <span>
          Collection:{" "}
          {snapshot.docs.map((doc) => (
            <React.Fragment key={doc.id}>
              {JSON.stringify(doc.data())},{" "}
            </React.Fragment>
          ))}
        </span>
      )}
    </Container>
  );
};

export default withAuthorization(withRouter(Portfolio));
