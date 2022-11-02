import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

const medicines = [
  {
    id: "gfhf667",
    name: "paracetamol",
    quantity: 5,
    expiry: "22/01/2022",
  },
  {
    id: "gfhf667gdg",
    name: "cetzine",
    quantity: 8,
    expiry: "22/01/2022",
  },
  {
    id: "gfhf667kjhkj",
    name: "pudin hara",
    quantity: 8,
    expiry: "22/01/2022",
  },
  {
    id: "gfhf667rd",
    name: "meftal spas",
    quantity: 8,
    expiry: "22/01/2022",
  },
  {
    id: "gf667",
    name: "paracetamol",
    quantity: 5,
    expiry: "22/01/2022",
  },
  {
    id: "gfhf7gdg",
    name: "cetzine",
    quantity: 8,
    expiry: "22/01/2022",
  },
  {
    id: "gf667kjhkj",
    name: "pudin hara",
    quantity: 8,
    expiry: "22/01/2022",
  },
  {
    id: "gfh667rd",
    name: "meftal spas",
    quantity: 8,
    expiry: "22/01/2022",
  },
  {
    id: "gfhf6j67",
    name: "paracetamol",
    quantity: 5,
    expiry: "22/01/2022",
  },
  {
    id: "gfhf667g",
    name: "cetzine",
    quantity: 8,
    expiry: "22/01/2022",
  },
  {
    id: "gfhf667kjh",
    name: "pudin hara",
    quantity: 8,
    expiry: "22/01/2022",
  },
  {
    id: "gfhf66rd",
    name: "meftal spas",
    quantity: 8,
    expiry: "22/01/2022",
  },
];

export const Inventory = () => {
  const [rows, setRows] = useState(medicines);
  const [searched, setSearched] = useState("");

  const [newMedicine, setnewMedicine] = useState({
    name: "",
    quantity: 0,
    expiry: "",
  });
  const handleInputMedicine = (e) => {
    setnewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };
  const handleAddMedicine = (e) => {
    console.log(newMedicine);
    setnewMedicine({
      name: "",
      quantity: 0,
      expiry: "",
    });
  };

  const requestSearch = (searchedVal) => {
    const filteredRows = medicines.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };
  const handleEdit = (id) => {
    console.log(id);
  };
  const handleDelete = (id) => {
    console.log(id);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };
  return (
    <div style={{ width: "850px" }}>
      <div
        className="mb-2"
        style={{ position: "sticky", top: "0px", zIndex: "100" }}
      >
        <div className="d-flex justify-content-between bg-white p-2">
          <div className="mx-1 mt-1">
            <TextField
              id="input-with-icon-textfield"
              label="Medicine Name"
              variant="standard"
              name="name"
              value={newMedicine.name}
              onChange={(e) => handleInputMedicine(e)}
            />
          </div>
          <div className="mx-1 mt-1">
            <TextField
              id="input-with-icon-textfield"
              type="number"
              label="Quantity"
              variant="standard"
              name="quantity"
              value={newMedicine.quantity}
              onChange={(e) => handleInputMedicine(e)}
            />
          </div>
          <div className="mx-1">
            <div className="css-1d1r5q-MuiFormHelperText-root">Expiry Date</div>
            <TextField
              id="input-with-icon-textfield"
              type="date"
              variant="standard"
              name="expiry"
              value={newMedicine.expiry}
              onChange={(e) => handleInputMedicine(e)}
            />
          </div>

          <Button
            color="primary"
            size="small"
            className="color4 rounded mt-2"
            variant="contained"
            sx={{ width: "40px", height: "40px" }}
            onClick={() => handleAddMedicine()}
          >
            <AddIcon fontSize="small" />
          </Button>
        </div>
      </div>
      <div>
        <Paper>
          <SearchBar
            className="border-bottom"
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
          />
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>MEDICINE NAME</TableCell>
                  <TableCell align="right">IN-STOCK</TableCell>
                  <TableCell align="right">EXPIRY DATES</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="right">{item.expiry}</TableCell>
                    <TableCell align="right">
                      <div className="d-flex justify-content-end">
                        <Button onClick={() => handleEdit(item.id)}>
                          <EditIcon />
                        </Button>
                        <Button>
                          <DeleteIcon onClick={() => handleDelete(item.id)} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};
