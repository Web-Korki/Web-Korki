export const WhichMonthFunc = (props) => {
  let month;
  switch (props.month) {
    case 'january':
      month = 'Styczeń';
      break;
    case 'february':
      month = 'Luty';
      break;
    case 'march':
      month = 'Marzec';
      break;
    case 'april':
      month = 'Kwiecień';
      break;
    case 'may':
      month = 'Maj';
      break;
    case 'june':
      month = 'Czerwiec';
      break;
    case 'september':
      month = 'Wrzesień';
      break;
    case 'october':
      month = 'Październik';
      break;
    case 'november':
      month = 'Listopad';
      break;
    case 'december':
      month = 'Grudzień';
      break;
    default:
      month = 'Miesiąc nieznany';
  }
  return <h1 className="title">{month}</h1>;
};
