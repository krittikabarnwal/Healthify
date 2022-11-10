import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

export const PatientRecords = () => {
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
          name: "paracetamol",
          quantity: 5,
          remark: "3 times a day",
        },
        {
          name: "cetzine",
          quantity: 5,
          remark: "3 times a day",
        },
      ],
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
          name: "paracetamol",
          quantity: 5,
          remark: "3 times a day",
        },
        {
          name: "cetzine",
          quantity: 5,
          remark: "3 times a day",
        },
      ],
    },
  ];
  const prescription = {
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
        name: "paracetamol",
        quantity: 5,
        remark: "3 times a day",
      },
      {
        name: "cetzine",
        quantity: 5,
        remark: "3 times a day",
      },
    ],
  };
  const [expanded, setExpanded] = React.useState("");

  return (
    <div className="color3 py-3">
      {prescriptions.map((prescription) => (
        <div className=" w-100 h-100 d-flex justify-content-center py-3">
          <Card
            sx={{
              maxWidth: 800,
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
                    if (expanded === "") setExpanded(prescription.id);
                    else setExpanded("");
                  }}
                  aria-expanded={expanded !== ""}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              }
              title={prescription.doctorName}
              subheader={prescription.date + "  ( " + prescription.name + " )"}
            />

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Symptoms: {prescription.symptons}
              </Typography>
            </CardContent>

            <Collapse
              in={expanded === prescription.id}
              timeout="auto"
              unmountOnExit
            >
              <CardContent>
                <Typography paragraph>Diagnosis:</Typography>
                <Typography paragraph>{prescription.diagnosis}</Typography>
                <Typography paragraph>Medicines:</Typography>
                <Typography paragraph>
                  {prescription.medicines.map((med) => (
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
                </Typography>
                <Typography>Test:</Typography>
                <Typography>{prescription.test}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      ))}
    </div>
  );
};
