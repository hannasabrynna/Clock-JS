const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours //quando o número da hora for menor que 10, adciona o 0 na frente;
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds

    clock.innerHTML = `${hour}:${minute}:${second}`
    
  }
  
  setInterval(() => { { getHours()}} , 1000  )


    
  