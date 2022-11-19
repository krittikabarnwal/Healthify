import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./index.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const PatientRecords = (user) => {
  const refpres = ref(db, "prescription");
  const [prescriptiondata, setPrecription] = useState([]);
  const [data, setdata] = useState({});

  useEffect(() => {
    onValue(refpres, (snapshot) => {
      setPrecription([]);
      setdata(() => snapshot.val());
      if (data != null) {
        Object.values(data).map((prescription) => {
          setPrecription((prev) => [...prev, prescription]);
        });
      }
    });
    console.log(data);
    // console.log(prescriptiondata);
    onValue(refpatient, (snapshot) => {
      setPatient([]);
      const data = snapshot.val();
      if (data != null) {
        Object.values(data).map((patient) => {
          setPatient((prev) => [...prev, patient]);
        });
      }
    });
    for (var i = 0; i < patientdata.length; i++) {
      if (patientdata[i].email === user.user.user.email) {
        setUniqueId(patientdata[i].uniqueId);
      }
    }
  }, []);
  const refpatient = ref(db, "Patient");
  const [patientdata, setPatient] = useState([]);

  const [expanded, setExpanded] = React.useState("");
  const [uniqueId, setUniqueId] = useState("");

  return (
    <div className="color3 py-3 pateintRecordsDivMain ">
      {Object.values(data).length === 0 ? (
        <div className="mx-5 h4">No prescription to display</div>
      ) : (
        <>
          {Object.values(data).map((prescription) => (
            <div key={prescription.uuid}>
              {prescription.uniqueId === uniqueId && (
                <div className=" w-100 h-100 d-flex justify-content-center py-3">
                  {console.log(prescription)}
                  <Card
                    sx={{
                      minWidth: 800,
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar className={"patientcolor"} aria-label="recipe">
                          {prescription.name[0]}
                        </Avatar>
                      }
                      action={
                        <ExpandMore
                          expand={expanded !== ""}
                          onClick={() => {
                            if (expanded === "") setExpanded(prescription.uuid);
                            else setExpanded("");
                          }}
                          aria-expanded={expanded !== ""}
                          aria-label="show more"
                        >
                          <ExpandMoreIcon />
                        </ExpandMore>
                      }
                      title={prescription.doctorName}
                      subheader={
                        prescription.date + "  ( " + prescription.name + " )"
                      }
                    />

                    <CardContent className="d-flex">
                      <Typography variant="body2">Symptoms: &emsp;</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {"  " + prescription.symptons}
                      </Typography>
                    </CardContent>

                    <Collapse
                      in={expanded === prescription.uuid}
                      timeout="auto"
                      unmountOnExit
                    >
                      <CardContent>
                        <div className="d-flex">
                          <Typography variant="body2" paragraph>
                            Diagnosis : &emsp;
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            paragraph
                          >
                            {"  " + prescription.diagnosis}
                          </Typography>
                        </div>
                        <Typography variant="body2" paragraph>
                          Medicines:
                        </Typography>
                        <Typography
                          paragraph
                          variant="body2"
                          color="text.secondary"
                        >
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
                                {prescription.medicine.map((row) => (
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
                        </Typography>
                        <div className="d-flex">
                          <Typography variant="body2">Test: &emsp;</Typography>
                          <Typography variant="body2" color="text.secondary">
                            {prescription.test}
                          </Typography>
                        </div>
                      </CardContent>
                    </Collapse>
                  </Card>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
