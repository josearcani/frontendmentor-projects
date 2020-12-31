const items = document.querySelectorAll('span')

//January 24th, 2021
let futureDate = new Date(2021, 0, 24, 12, 0, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds()


const futureTime = futureDate.getTime();

function getReminingTime() {
  const today = new Date().getTime()
  const time = futureTime - today

  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60* 1000
  const oneMinute = 60 * 1000
  /* calculating all values */
  let days = time / oneDay
  days = Math.floor(days)
  let hours = Math.floor((time % oneDay) / oneHour)
  let minutes = Math.floor((time % oneHour) / oneMinute)
  let seconds = Math.floor((time % oneMinute) / 1000)

  const values = [days, hours, minutes, seconds]

  const format = (value) => {
    if (value < 10) return `0${value}`
    return value
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })

  if (time < 0) {
    clearInterval(countdown)
    items.forEach((item) => item.innerHTML = '00')
    document.querySelector('.message p').innerHTML = `Too late, the countdown is over`
  }
}

let countdown = setInterval(getReminingTime, 1000)

getReminingTime()