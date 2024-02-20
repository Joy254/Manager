import React from 'react';
import Reminder from './Reminder';

const ReminderList = ({ reminders }) => (
  <div>
    <h2>Reminders</h2>
    {reminders.length > 0 && reminders.map(reminder => <Reminder key={reminder.id} reminder={reminder} />)}
  </div>
);

export default ReminderList;