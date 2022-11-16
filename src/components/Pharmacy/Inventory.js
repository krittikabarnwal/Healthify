import React, { useState, useEffect } from "react";
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
import { v4 as uuidv4 } from "uuid";
import { ref, onValue, set, remove, update } from "firebase/database";
import { db } from "../firebase";
import CancelIcon from "@mui/icons-material/Cancel";

export const Inventory = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [tempuuid, setTempUuid] = useState("");
  const [data, setdata] = useState({});
  const refinv = ref(db, "inventory");
  const [rows, setRows] = useState([]);

  useEffect(() => {
    onValue(refinv, (snapshot) => {
      setinventory([]);
      setdata(() => snapshot.val());
    });
  }, []);
  const [inventorydata, setinventory] = useState([]);

  const [searched, setSearched] = useState("");
  const [newMedicine, setnewMedicine] = useState({
    name: "",
    quantity: 0,
    expiry: "",
  });
  const handleInputMedicine = (e) => {
    setnewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };
  const handleAddMedicine = async (e) => {
    e.preventDefault();
    const { name, quantity, expiry } = newMedicine;
    const uuid = uuidv4();
    set(ref(db, `/inventory/${uuid}`), {
      name,
      expiry,
      uuid,
      quantity,
    });
    setnewMedicine({
      name: "",
      quantity: 0,
      expiry: "",
    });
    // const res = await fetch(
    //   "https://healthyify-krittika-default-rtdb.asia-southeast1.firebasedatabase.app/inventory.json",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       quantity,
    //       expiry,
    //       uuid: uuidv4(),
    //     }),
    //   }
    // );

    alert("Added");
  };
  const requestSearch = (searchedVal) => {
    console.log(inventorydata);
    const filteredRows = inventorydata.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };
  const handleUpdate = (item) => {
    setIsEdit(() => true);
    setTempUuid(() => item.uuid);
    setnewMedicine(() => item);
    console.log(item.uuid);
  };
  const handleUpdateSubmit = () => {
    const { name, quantity, expiry } = newMedicine;
    update(ref(db, `/inventory/${tempuuid}`), {
      name,
      expiry,
      uuid: tempuuid,
      quantity,
    });
    setnewMedicine({
      name: "",
      quantity: 0,
      expiry: "",
    });
    setIsEdit(false);
  };
  const handleDelete = async (uuid) => {
    remove(ref(db, `/inventory/${uuid}`));
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

          {isEdit ? (
            <>
              <Button
                color="primary"
                size="small"
                variant="text"
                onClick={() => {
                  setIsEdit(() => false);
                  setnewMedicine({
                    name: "",
                    quantity: 0,
                    expiry: "",
                  });
                }}
              >
                <CancelIcon />
              </Button>

              <Button
                color="primary"
                size="small"
                className="color4 rounded mt-2"
                variant="contained"
                sx={{ width: "40px", height: "40px" }}
                onClick={(e) => handleUpdateSubmit()}
              >
                Update
              </Button>
            </>
          ) : (
            <Button
              color="primary"
              size="small"
              className="color4 rounded mt-2"
              variant="contained"
              sx={{ width: "40px", height: "40px" }}
              onClick={(e) => handleAddMedicine(e)}
            >
              <AddIcon fontSize="small" />
            </Button>
          )}
        </div>
      </div>
      <div>
        <Paper>
          {/* <SearchBar
            className="border-bottom"
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
          /> */}
          <TableContainer component={Paper}>
            {/* {fetchData(data)} */}
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
                {/* {console.log(data)}
                {console.log(rows)} */}
                {Object.values(data).map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.uuid}
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="right">{item.expiry}</TableCell>
                    <TableCell align="right">
                      <div className="d-flex justify-content-end">
                        <Button onClick={() => handleUpdate(item)}>
                          <EditIcon />
                        </Button>
                        <Button>
                          <DeleteIcon onClick={() => handleDelete(item.uuid)} />
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
