import React, { useState, useEffect } from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputAdornment from "@mui/material/InputAdornment";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import WcIcon from "@mui/icons-material/Wc";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router";
import { LogoutUser } from "../Auth/logout";
import CancelIcon from "@mui/icons-material/Cancel";
import Search from "@mui/icons-material/Search";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { ref, set, onValue } from "firebase/database";
import { db } from "../firebase";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  p: 4,
};

export const DoctorHeader = (user, handlepatientsearch) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setAllMed([]);
    setMed({
      name: "",
      quantity: 0,
      remark: "",
    });
    setPrescription({
      name: "get from api",
      uniqueId: "",
      date: y,
      gender: "get from api",
      symptons: "",
      diagnosis: "",
      test: "",
    });
  };

  var start = new Date();
  var y = start.toLocaleString().substring(0, 8);

  const refpatient = ref(db, "Patient");
  const refinv = ref(db, "inventory");

  const [patientdata, setPatient] = useState([]);
  const [pname, setpname] = useState("");
  const [data, setdata] = useState({});
  const [instock, setinstock] = useState(0);
  const [searchpat, setSearchPat] = useState("");

  const [med, setMed] = useState({
    name: "",
    quantity: 0,
    remark: "",
  });
  const [allmed, setAllMed] = useState([]);
  const [prescripton, setPrescription] = useState({
    name: "get from api",
    uniqueId: "",
    date: y,
    symptons: "",
    diagnosis: "",
    test: "",
  });

  const handlePrescription = (e) => {
    setPrescription({ ...prescripton, [e.target.name]: e.target.value });
  };

  const handleAddmedicine = () => {
    setAllMed([...allmed, med]);
    setMed({
      name: "",
      quantity: 0,
      remark: "",
      uuid: "",
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, uniqueId, date, symptons, diagnosis, test } = prescripton;

    const medicine = allmed;
    const uuid = uuidv4();
    set(ref(db, `/prescription/${uuid}`), {
      uuid,
      name,
      uniqueId,
      date,
      symptons,
      diagnosis,
      test,
      medicine,
      doctorName: user.user.user.displayName,
      doctorId: user.user.user.uid,
      medicineGiven: "",
    });
    setOpen(false);
    setAllMed([]);
    setMed({
      name: "",
      quantity: 0,
      remark: "",
      uuid: "",
    });
    setPrescription({
      name: "get from api",
      uniqueId: "",
      date: y,
      gender: "get from api",
      symptons: "",
      diagnosis: "",
      test: "",
    });
    alert("Submitted Prescripton");

    // console.log(medicine);
    // const res = await fetch(
    //   "https://healthyify-krittika-default-rtdb.asia-southeast1.firebasedatabase.app/prescription.json",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       uuid,
    //       name,
    //       uniqueId,
    //       date,
    //       symptons,
    //       diagnosis,
    //       test,
    //       medicine,
    //       doctorName: user.user.user.displayName,
    //       doctorId: user.user.user.uid,
    //       medicineGiven: "",
    //     }),
    //   }
    // );
    // if (res) {
    //   setOpen(false);
    //   setAllMed([]);
    //   setMed({
    //     name: "",
    //     quantity: 0,
    //     remark: "",
    //   });
    //   setPrescription({
    //     name: "get from api",
    //     uniqueId: "",
    //     date: y,
    //     gender: "get from api",
    //     symptons: "",
    //     diagnosis: "",
    //     test: "",
    //     uuid: uuidv4(),
    //   });
    //   alert("Submitted Prescripton");
    // }
  };

  const handleSearch = () => {
    for (var i = 0; i < patientdata.length; i++) {
      console.log(patientdata[i].uniqueId, prescripton.uniqueId);
      if (
        patientdata[i].uniqueId.toLowerCase() ===
        prescripton.uniqueId.toLowerCase()
      ) {
        setpname(patientdata[i].name);
        break;
      } else {
        setpname("");
      }
    }

    setPrescription((prevState) => ({
      ...prevState,
      ["name"]: pname,
    }));
    // setpname(() => "");
  };
  const handleMedSearch = () => {
    Object.values(data).map((inv) => {
      // console.log(med.name.toLowerCase(), inv.name.toLowerCase());
      if (med.name.toLowerCase() === inv.name.toLowerCase()) {
        setinstock(() => inv.quantity);
        setMed((prev) => ({
          ...prev,
          ["uuid"]: inv.uuid,
        }));
      }
    });
  };

  useEffect(() => {
    onValue(refpatient, (snapshot) => {
      setPatient([]);
      const data = snapshot.val();
      if (data != null) {
        Object.values(data).map((patient) => {
          setPatient((prev) => [...prev, patient]);
        });
      }
    });
    onValue(refinv, (snapshot) => {
      setdata(() => snapshot.val());
      // const data = snapshot.val();
      // if (data != null) {
      //   Object.values(data).map((inv) => {
      //     setinvData((prev) => [...prev, inv]);
      //   });
      // }
    });
    // console.log(invdata);
  }, []);

  return (
    <div className="DoctorNavbar d-flex justify-content-between border-bottom doctorcolor text-white">
      {/* {console.log(user.user.user.displayName)} */}
      <div className="NavLogo d-flex my-2">
        <img
          src={"/images/doctoricon.jpg"}
          width="70px"
          className="ms-2 me-4"
        />
        <LocalHospitalIcon fontSize="large" sx={{ fontSize: "45px" }} />

        <div className="headingNav mt-2 mx-3">Doctor</div>
      </div>

      <div className="d-flex ">
        <div className="d-flex mx-4">
          <Button
            variant="text"
            sx={{ px: "4px", py: "0", my: "0" }}
            onClick={handleOpen}
          >
            <div className="text-white ">+ New Prescription</div>
          </Button>
          <Tooltip title="Create a new Prescription">
            <button className="PrescriptionStickyButton" onClick={handleOpen}>
              <AddCircleOutlineIcon fontSize="large" />
            </button>
          </Tooltip>
        </div>
        <div className="verticalLine mt-3"></div>

        <div className="  d-flex align-items-bottom">
          <IconButton
            type="button"
            sx={{ p: "4px" }}
            aria-label="search"
            // onClick={handlepatientsearch(searchpat)}
          >
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search Patient by Id"
            inputProps={{ "aria-label": "Search Patient by Id" }}
            onChange={(e) => setSearchPat(() => e.target.value)}
          />
        </div>
        <div className="verticalLine mt-3"></div>

        <div className="d-flex">
          <div className="UserName mx-3 mt-3">
            {/* {console.log(user.user.user.uid)} */}
            {user ? user.user.user.displayName : "User Name"}
          </div>
          <LogoutUser />
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div>
            <form method="POST">
              <div className="ModalPrescription">
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    <div className="d-flex justify-content-between">
                      <div>New Prescription</div>
                      <div>
                        <Fab
                          size="small"
                          color="error"
                          aria-label="add"
                          onClick={() => handleClose()}
                        >
                          <CloseIcon />
                        </Fab>
                      </div>
                    </div>
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <TextField
                          id="input-with-icon-textfield"
                          label="Unique ID"
                          name="uniqueId"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                          value={prescripton.uniqueId}
                          onChange={handlePrescription}
                          variant="standard"
                          required
                        />
                        <Button>
                          <SearchIcon
                            sx={{ mt: 2 }}
                            onClick={() => handleSearch()}
                          />
                        </Button>
                      </div>
                      <div>
                        <TextField
                          id="input-with-icon-textfield"
                          label="Date"
                          name="date"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CalendarMonthIcon />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                          value={prescripton.date}
                          onChange={handlePrescription}
                          required
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <div>
                        <TextField
                          id="input-with-icon-textfield"
                          label="Student Name"
                          color="success"
                          disabled="true"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountCircle />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                          value={prescripton.name}
                          onChange={handlePrescription}
                          required
                        />
                      </div>
                    </div>
                    <div className="my-3">
                      <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Symptons"
                        multiline
                        name="symptons"
                        rows={5}
                        value={prescripton.symptons}
                        onChange={handlePrescription}
                        required
                      />
                    </div>
                    <div className="my-3">
                      <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Diagnosis"
                        name="diagnosis"
                        multiline
                        rows={5}
                        value={prescripton.diagnosis}
                        onChange={handlePrescription}
                        required
                      />
                    </div>
                    <div className="my-3">
                      <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Tests"
                        multiline
                        rows={3}
                        name="test"
                        value={prescripton.test}
                        onChange={handlePrescription}
                      />
                    </div>
                    <div className="mt-3">
                      Medicine:
                      <div className="d-flex justify-content-between">
                        <div className="d-flex">
                          <TextField
                            id="input-with-icon-textfield"
                            label="Medicine Name"
                            variant="standard"
                            value={med.name}
                            onChange={(e) =>
                              setMed({ ...med, name: e.target.value })
                            }
                          />
                          <CancelIcon
                            fontSize="small"
                            sx={{ mt: 3 }}
                            onClick={() => {
                              setinstock(() => 0);
                              setMed({
                                name: "",
                                quantity: 0,
                                remark: "",
                                uuid: "",
                              });
                            }}
                          />
                          <Button onClick={() => handleMedSearch()}>
                            <SearchIcon sx={{ mt: 2 }} />
                          </Button>
                        </div>
                        <div className="mx-1">
                          <TextField
                            id="input-with-icon-textfield"
                            type="number"
                            label="Quantity"
                            variant="standard"
                            value={med.quantity}
                            onChange={(e) =>
                              setMed({ ...med, quantity: e.target.value })
                            }
                          />
                        </div>
                        <div>
                          <TextField
                            id="input-with-icon-textfield"
                            type="text"
                            label="Remark"
                            variant="standard"
                            value={med.remark}
                            onChange={(e) =>
                              setMed({ ...med, remark: e.target.value })
                            }
                          />
                        </div>
                        <div className="mx-1">
                          <TextField
                            id="input-with-icon-textfield"
                            label="In Stock"
                            disabled="true"
                            value={instock}
                            variant="standard"
                          />
                        </div>
                        <div className="mx-1">
                          <Fab
                            className="doctorcolor"
                            sx={{ color: "white" }}
                            aria-label="add"
                            size="small"
                            onClick={() => handleAddmedicine()}
                          >
                            <AddIcon fontSize="small" />
                          </Fab>
                        </div>
                      </div>
                      <div class=" my-4">
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 650 }}
                            size="small"
                            aria-label="a dense table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Medicine Name</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Remark</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {allmed.map((row) => (
                                <TableRow key={row.name}>
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.quantity}
                                  </TableCell>
                                  <TableCell align="right">
                                    {row.remark}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </div>
                    </div>
                  </Typography>
                  <div className="d-flex justify-content-center mt-3">
                    <Fab
                      variant="extended"
                      className="doctorcolor"
                      aria-label="add"
                      sx={{ px: 5, color: "white" }}
                      type="submit"
                      onClick={postData}
                    >
                      Submit
                    </Fab>
                  </div>
                </Box>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};
