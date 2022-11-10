import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import "./index.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Inventory } from "./Inventory";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const PharmacyRecords = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const prescriptions = [
    {
      id: "iiddididi",
      name: "Krittika Barnwal",
      date: "30/01/2022",
      gender: "Female",
      uniqueId: "19JE0453",
      doctorName: "Dr S.k. Saha",
      symptons:
        "Hi,his impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with th mussels, if you like.",
      diagnosis:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with th mussels, if you like.",
      test: "abc \n def",
      medicines: [
        {
          id: "jdfb349u",
          name: "paracetamol",
          quantity: 5,
          remark: "3 times a day",
        },
        {
          id: "jdfb349usdf",
          name: "cetzine",
          quantity: 5,
          remark: "3 times a day",
        },
      ],
      medicineGiven: "",
    },
    {
      id: "iiddidi",
      name: "Simran Barnwal",
      date: "30/01/2022",
      gender: "Female",
      uniqueId: "19JE0453",
      doctorName: "Dr S.k. Saha",
      symptons:
        "Hi,his impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with th mussels, if you like.",
      diagnosis:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with th mussels, if you like.",
      test: "abc \n def",
      medicines: [
        {
          id: "jdfb349u",
          name: "paracetamol",
          quantity: 5,
          remark: "3 times a day",
        },
        {
          id: "jdfb349usdf",
          name: "cetzine",
          quantity: 5,
          remark: "3 times a day",
        },
      ],
      medicineGiven: "Rakesh Singh",
    },
  ];
  const handleGiveMedicine = (id) => {
    console.log("given medicine to ", id);
  };

  return (
    <div className="color2 py-3">
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          minheight: "100vh",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ width: "210px", borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="New Prescriptions" {...a11yProps(0)} />
          <Tab label="All Prescriptions" {...a11yProps(1)} />
          <Tab label="Inventory" {...a11yProps(2)} />
        </Tabs>
        <div
          className="d-flex justify-content-center w-100"
          style={{ height: "90vh" }}
        >
          <div className=" overflow-auto ">
            <TabPanel value={value} index={0}>
              {prescriptions.map((prescription) => (
                <div>
                  {prescription.medicineGiven === "" ? (
                    <div className=" w-100 h-100 d-flex justify-content-center py-3">
                      <Card
                        sx={{
                          width: 800,
                        }}
                      >
                        <CardHeader
                          avatar={
                            <Avatar
                              className={"pharmacycolor"}
                              aria-label="recipe"
                            >
                              {prescription.name[0]}
                            </Avatar>
                          }
                          title={
                            prescription.name +
                            "  ( " +
                            prescription.uniqueId +
                            " )"
                          }
                          subheader={
                            prescription.date +
                            "  ( " +
                            prescription.doctorName +
                            " )"
                          }
                        />

                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                            <TableContainer component={Paper}>
                              <Table
                                sx={{ minWidth: 650 }}
                                size="small"
                                aria-label="a dense table"
                              >
                                <TableHead>
                                  <TableRow>
                                    <TableCell>Medicine Name</TableCell>
                                    <TableCell align="right">
                                      Quantity
                                    </TableCell>
                                    <TableCell align="right">Remark</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {prescription.medicines.map((row) => (
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
                            <div className="mt-3">
                              {prescription.medicineGiven === "" ? (
                                <Button
                                  variant="contained"
                                  className="color4"
                                  onClick={() =>
                                    handleGiveMedicine(prescription.id)
                                  }
                                >
                                  Give Medicine
                                </Button>
                              ) : (
                                <Button
                                  variant="outlined"
                                  size="small"
                                  disabled
                                >
                                  Medicine given by {prescription.medicineGiven}
                                </Button>
                              )}
                            </div>
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {prescriptions.map((prescription) => (
                <div className=" w-100 h-100 d-flex justify-content-center py-3">
                  <Card
                    sx={{
                      width: 800,
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar className={"pharmacycolor"} aria-label="recipe">
                          {prescription.name[0]}
                        </Avatar>
                      }
                      title={
                        prescription.name +
                        "  ( " +
                        prescription.uniqueId +
                        " )"
                      }
                      subheader={
                        prescription.date +
                        "  ( " +
                        prescription.doctorName +
                        " )"
                      }
                    />

                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
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
                              {prescription.medicines.map((row) => (
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
                        <div className="mt-3">
                          {prescription.medicineGiven === "" ? (
                            <Button variant="contained" className="color4">
                              Give Medicine
                            </Button>
                          ) : (
                            <Button variant="outlined" size="small" disabled>
                              Medicine given by {prescription.medicineGiven}
                            </Button>
                          )}
                        </div>
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Inventory />
            </TabPanel>
          </div>
        </div>
      </Box>
    </div>
  );
};