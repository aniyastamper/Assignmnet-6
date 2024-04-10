//This is where the functions are firs

//in the () it will allow us to catch the 24 hour time format
const getTimeOfDay = (time) => {  //time = currenttime in app.js

   if (isMorning(time)) {
      return "Morning"
   }
   else if(isAfternoon(time)){
      return "Afternoon"
   }
   else {
      return "Evening"
   }
  
}

const isMorning = (time) => {
   return (time >= 4 && time < 12 ) // is it morning?
   
}

const isAfternoon = (time) => {
   return (time  >= 12 && time < 17 ) // is it afternoon?
}

const isEvening = (time) => {
   return (time >= 17 || time < 4 ) // is it evening?
}

module.exports = {getTimeOfDay, isMorning, isAfternoon, isEvening}