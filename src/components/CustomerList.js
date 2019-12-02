import "react-table/react-table.css";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ReactTable from "react-table";

import AddCustomer from "./AddCustomer";
import AddTraining from "./AddTraining";
import EditCustomer from "./EditCustomer";

function CustomerList() {
  const history = useHistory();
  const [customers, setCustomers] = useState([]);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const deleteCustomer = link => {
    if (window.confirm("Are you sure?")) {
      fetch(link, { method: "DELETE" })
        .then(response => fetchCustomers())
        .then(response => setMessage("Customer deleted"))
        .then(response => setOpen(true))
        .catch(err => console.error(err));
    }
  };
  const fetchCustomers = () => {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then(response => response.json())
      .then(data => setCustomers(data.content))
      .catch(err => console.error(err));
  };

  const saveCustomer = newCustomer => {
    fetch("https://customerrest.herokuapp.com/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCustomer)
    })
      .then(res => fetchCustomers())
      .then(res => setMessage("New customer has been added"))
      .then(res => setOpen(true))
      .catch(err => console.error(err));
  };

  const saveTraining = newTraining => {
    fetch("https://customerrest.herokuapp.com/api/trainings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTraining)
    }).then(() => {
      history.push("/training");
    });
  };

  const updateCustomer = (customer, link) => {
    fetch(link, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customer)
    })
      .then(response => fetchCustomers())
      .catch(err => console.err(err));
  };

  const columns = [
    { Header: "Firstname", accessor: "firstname" },
    {
      Header: "Lastname",
      accessor: "lastname"
    },
    { Header: "Street Address", accessor: "streetaddress" },
    { Header: "Postcode", accessor: "postcode" },
    { Header: "City", accessor: "city" },
    { Header: "Phone", accessor: "phone" },
    { Header: "Email", accessor: "email" },
    {
      sortable: false,
      filterable: false,
      width: 120,
      Cell: row => (
        <AddTraining saveTraining={saveTraining} training={row.original} />
      )
    },
    {
      sortable: false,
      filterable: false,
      width: 100,
      Cell: row => (
        <EditCustomer updateCustomer={updateCustomer} customer={row.original} />
      )
    },
    {
      sortable: false,
      filterable: false,
      width: 100,
      accessor: "links[0].href",
      Cell: ({ value }) => (
        <Button
          size="small"
          color="secondary"
          onClick={() => deleteCustomer(value)}
        >
          Delete
        </Button>
      )
    }
  ];
  return (
    <div>
      <Grid container>
        <Grid item>
          <AddCustomer saveCustomer={saveCustomer} />
        </Grid>
      </Grid>
      <ReactTable data={customers} columns={columns} filterable={true} />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
}

export default CustomerList;
