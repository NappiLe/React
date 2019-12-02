import "../App.css";

import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import React, { useEffect, useState } from "react";

function Calendar() {
  const [training, setTraining] = useState([]);

  useEffect(() => {
    fetchTraining();
  }, []);

  const fetchTraining = () => {
    fetch("https://customerrest.herokuapp.com/api/trainings/")
      .then(response => response.json())
      .then(data => setTraining(data.content))
      .catch(err => console.error(err));
  };
  var newData = training.map(function(obj) {
    return {
      title: obj.activity,
      date: obj.date,
      duration: obj.duration
    };
  });

  return (
    <div>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={newData}
      />
    </div>
  );
}

export default Calendar;
