import React, { useState } from "react";
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

import "./index.css";
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

export const DoctorHeader = () => {
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
    gender: "get from api",
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
    });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, uniqueId, date, gender, symptons, diagnosis, test } =
      prescripton;

    const medicine = allmed;
    console.log(medicine);
    const res = await fetch(
      "https://healthify-iitism-default-rtdb.firebaseio.com/prescription.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "aaplication/json",
        },
        body: JSON.stringify({
          name,
          uniqueId,
          date,
          gender,
          symptons,
          diagnosis,
          test,
          medicine,
        }),
      }
    );
    if (res) {
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
      alert("Submitted Prescripton");
    }
  };

  return (
    <div className="DoctorNavbar d-flex justify-content-between border-bottom doctorcolor text-white">
      <div className="NavLogo d-flex my-2">
        {/* <img src={"/images/icon.jpeg"} width="60px" /> */}
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
          <IconButton type="button" sx={{ p: "4px" }} aria-label="search">
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search Student"
            inputProps={{ "aria-label": "search student" }}
          />
        </div>
        <div className="verticalLine mt-3"></div>

        <div className="ms-3 d-flex align-items-bottom">
          <IconButton type="button" sx={{ p: "4px" }} aria-label="search">
            <SearchIcon sx={{ color: "white" }} />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1, color: "white" }}
            placeholder="Search Medicine"
            inputProps={{ "aria-label": "search medicine" }}
          />
        </div>
        <div className="verticalLine mt-3"></div>

        <div className="d-flex mt-3">
          <div className="UserName mx-3">User Name</div>
          <AccountCircleIcon fontSize="large" sx={{ mx: "5px" }} />
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
                      <div>
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
                      <div>
                        <TextField
                          id="input-with-icon-textfield"
                          label="Gender"
                          disabled="true"
                          name="gender"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <WcIcon />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                          value={prescripton.gender}
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
                    <div className="mt-3">
                      Medicine:
                      <div className="d-flex justify-content-between">
                        <div>
                          <TextField
                            id="input-with-icon-textfield"
                            label="Medicine Name"
                            variant="standard"
                            value={med.name}
                            onChange={(e) =>
                              setMed({ ...med, name: e.target.value })
                            }
                          />
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
                            value="get from API"
                            variant="standard"
                          />
                        </div>
                        <div className="mx-1">
                          <Fab
                            color="primary"
                            aria-label="add"
                            size="small"
                            onClick={() => handleAddmedicine()}
                          >
                            <AddIcon fontSize="small" />
                          </Fab>
                        </div>
                      </div>
                      <div class=" my-4">
                        {allmed.map((med) => (
                          <div className="row">
                            <div class="col">
                              <div>{med.name}</div>
                            </div>
                            <div class="col">
                              <div>{med.quantity}</div>
                            </div>
                            <div class="col">
                              <div>{med.remark}</div>
                            </div>
                          </div>
                        ))}
                      </div>
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
                  </Typography>
                  <div className="d-flex justify-content-center mt-3">
                    <Fab
                      variant="extended"
                      color="success"
                      aria-label="add"
                      sx={{ px: 5 }}
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
