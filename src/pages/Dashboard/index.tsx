import { Button, Table } from "antd";
import * as React from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import Chart from "./Chart";
import { withAuthorization } from "src/components/AuthContext";
import {
  getPortfolioById,
  updatePortfolioAssets,
} from "src/services/portfolio";

// {"owner":"LC31lppBTIgWKvz6M6MJ90VLZtz1","stock":[{"currency":"EUR","value":10,"name":"IWDA"}],"estate":[{"name":"Jana Szczepanika 1/85","price":350000}],"bonds":[{"name":"EDO","interest":{"firstYear":0.017,"nextYears":"0.01"},"value":50000}],"name":"my"}

const columns = [
  { title: "Obligacje", dataIndex: "name", key: "name" },
  { title: "Category", dataIndex: "category", key: "category" },
  { title: "Price", dataIndex: "price", key: "price" },
];

const Dashboard: React.FC<any> = () => {
  const [portfolio, loading, error] = useDocumentData<any>(
    getPortfolioById("Cn7u1pOuAyRGzZM1NMxL")
  );

  if (!portfolio || error) return null;

  const data = Object.values(portfolio.assets).reduce(
    (acc: Array<any>, item: any) => [...acc, ...item],
    []
  ) as any;

  return (
    <div>
      <Button onClick={() => updatePortfolioAssets("Cn7u1pOuAyRGzZM1NMxL", {})}>
        Update assets
      </Button>

      <Chart />

      <Table
        loading={loading}
        columns={columns}
        expandable={{
          expandedRowRender: (record: any) => (
            <p style={{ margin: 0 }}>{record.name}</p>
          ),
          rowExpandable: () => true,
        }}
        dataSource={data}
      />
    </div>
  );
};

export default withAuthorization(Dashboard);
