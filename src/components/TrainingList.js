import "react-table/react-table.css";

import { Snackbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import moment from "moment";
import React, { useEffect, useState } from "react";
import ReactTable from "react-table";

function TrainingList() {
  const [training, setTraining] = useState([]);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchTraining();
  }, []);

  const fetchTraining = () => {
    fetch(`https://customerrest.herokuapp.com/gettrainings`)
      .then(response => response.json())
      .then(data => setTraining(data))
      .catch(err => console.error(err));
  };

  const deleteTraining = value => {
    if (window.confirm("Are you sure?")) {
      fetch("https://customerrest.herokuapp.com/api/trainings/" + value, {
        method: "DELETE"
      })
        .then(response => fetchTraining())
        .then(response => setMessage("Training deleted"))
        .then(response => setOpen(true))
        .catch(err => console.error(err));
    }
  };
  const columns = [
    { Header: "Firstname", accessor: "customer.firstname" },
    {
      Header: "Lastname",
      accessor: "customer.lastname"
    },
    {
      Header: "Date",
      Cell: row => moment.utc(row.date).format("MMM Do YY")
    },
    {
      Header: "Duration",
      accessor: "duration"
    },
    { Header: "Activity", accessor: "activity" },
    {
      sortable: false,
      filterable: false,
      width: 100,
      accessor: "id",
      Cell: ({ value }) => (
        <Button
          size="small"
          color="secondary"
          onClick={() => deleteTraining(value)}
        >
          Delete
        </Button>
      )
    }
  ];
  return (
    <div>
      <ReactTable data={training} columns={columns} filterable={true} />
      <Snackbar
        open={open}
        autoHiddenDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}

export default TrainingList;
