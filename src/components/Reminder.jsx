import React from 'react';

const Reminder = ({ reminder }) => (
  <div>
    <p>Reminder Date: {reminder.reminder_date}</p>
    <p>Recurrence Pattern: {reminder.recurrence_pattern}</p>
  </div>
);

export default Reminder;