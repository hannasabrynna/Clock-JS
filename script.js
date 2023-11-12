const getTimeDate = () => {
  const clock = document.getElementsByClassName('clock')[0]
  const currentDate = document.getElementsByClassName('currentDate')[0]

  const date = new Date()

  const day = date.getDate();
  const month = date.getMonth() + 1; // Os meses começam do zero, então adicionamos 1
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hour = hours < 10 ? `0${hours}` : hours //quando o número da hora for menor que 10, adciona o 0 na frente;
  const minute = minutes < 10 ? `0${minutes}` : minutes
  const second = seconds < 10 ? `0${seconds}` : seconds

  clock.innerHTML = ` ${hour}:${minute}:${second}`
  currentDate.innerHTML = ` ${formattedDate}`

}

setInterval(() => { { getTimeDate() } }, 1000)



