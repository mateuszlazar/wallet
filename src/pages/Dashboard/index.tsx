import * as React from "react";
import {
  Button,
  Container,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { withAuthorization } from "src/components/AuthContext";
import { search } from "../../services/stock";
import { Autocomplete } from "@material-ui/lab";
import Asynchronous from "./Search";

const Dashboard: React.FC<any> = () => {
  const [value, setValue] = React.useState("");
  const [options, setOptions] = React.useState<any[]>([]);

  const fetchData = async () => {
    const { data } = await search(value);

    setOptions(data.bestMatches);
  };

  return (
    <Container maxWidth={"lg"}>
      <Asynchronous />
      ___
      <Button variant={"contained"} color="primary" onClick={fetchData}>
        Default
      </Button>
      <TextField id="standard-basic" label="Standard" />
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        // @ts-ignore
        onChange={console.log}
      >
        {options.map((option: any) => (
          <MenuItem value={option["1. symbol"]}>{option["2. name"]}</MenuItem>
        ))}
      </Select>
      <Autocomplete
        id="combo-box-demo"
        options={options}
        getOptionLabel={(option) =>
          `${option["2. name"]} (${option["1. symbol"]})}`
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Combo box"
            variant="outlined"
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      />
    </Container>
  );
};

export default withAuthorization(Dashboard);
