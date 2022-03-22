import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates, defaultDate) {
        if (selectedDates[0] < new Date()){
            alert("Please choose a date in the future")
        }
        else {
            console.log(selectedDates[0]);
            console.log(defaultDate);
        }
    },
    
  };

  flatpickr("#datetime-picker", options);
