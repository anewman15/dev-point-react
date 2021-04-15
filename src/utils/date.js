import {
  parseISO, format, formatDistanceToNow, isFuture,
} from 'date-fns';

export const formattedDate = time => format(new Date(parseISO(time)), 'MMM dd, yyyy EEE, HH:mm');

export const timeLeft = time => {
  const parsedDatetime = new Date(parseISO(time));
  const appointmentTime = isFuture(parsedDatetime) ? formatDistanceToNow(parsedDatetime) : 'Passed';
  return appointmentTime;
};
