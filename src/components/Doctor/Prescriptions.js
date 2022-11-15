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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";
import { onSnapshot } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
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

const refpres = ref(db, "prescription");

export const Prescriptions = (user) => {
  const [prescriptiondata, setPrecription] = useState([]);
  useEffect(() => {
    onValue(refpres, (snapshot) => {
      setPrecription([]);
      const data = snapshot.val();
      if (data != null) {
        Object.values(data).map((prescription) => {
          setPrecription((prev) => [...prev, prescription]);
        });
      }
    });
  }, []);

  const [expanded, setExpanded] = React.useState("");

  return (
    <div className="color1 py-3">
      {console.log(prescriptiondata)}
      {/* {prescriptiondata.map((prescription) => (
        <div className=" w-100 h-100 d-flex justify-content-center py-3">
          <Card
            sx={{
              maxWidth: 800,
            }}
          >
            <CardHeader
              avatar={
                <Avatar className={"doctorcolor"} aria-label="recipe">
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
              title={prescription.name + "  ( " + prescription.uniqueId + " )"}
              subheader={
                prescription.date + "  ( " + prescription.doctorName + " )"
              }
            />
          </Card>
        </div>
      ))} */}
      {prescriptiondata.map((prescription) => (
        <div>
          {prescription.doctorId === user.user.user.uid ? (
            <div className=" w-100 h-100 d-flex justify-content-center py-3">
              {console.log(prescription.doctorId, user.user.user.uid)}
              <Card
                sx={{
                  minWidth: 800,
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar className={"doctorcolor"} aria-label="recipe">
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
                  title={
                    prescription.name + "  ( " + prescription.uniqueId + " )"
                  }
                  subheader={
                    prescription.date + "  ( " + prescription.doctorName + " )"
                  }
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Symptoms: {prescription.symptons}
                  </Typography>
                </CardContent>

                <Collapse
                  in={expanded === prescription.uuid}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>Diagnosis:</Typography>
                    <Typography paragraph>{prescription.diagnosis}</Typography>
                    <Typography paragraph>
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
                    <Typography>Test:</Typography>
                    <Typography>{prescription.test}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};
