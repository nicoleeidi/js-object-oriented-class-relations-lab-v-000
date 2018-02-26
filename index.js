let store = {drivers: [], trips: [],passengers:[]}
let driver1Id= 0
class Driver {
  constructor(name){
    this.name=name
    this.id=++driver1Id
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(function(trip){return trip.driverId===this.id})
  }
  passengers(){
    trips= store.trips.filter(function(trip){return trip.driverId===this.id})
    return trips.map(function(trip){return trip.passengerId})
  }
}
let passenger1Id=0
class Passenger {
  constructor(name){
    this.name=name
    this.id= ++passenger1Id
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(function(trip){return trip.passengerId===this.id})
    }
  drivers(){
    trips= store.trips.filter(function(trip){return trip.passengerId===this.id})
    return trips.map(function(trip){return trip.driverId})
  }
}
let tripId=0
class Trip {
  constructor(driver,passenger){
    this.id= ++tripId
    if (passenger){this.passengerId=passenger.id}
    
    if(driver){this.driverId=driver.id}
    store.trips.push(this)
  }
  driver(){
    return store.drivers.find(function(driver){return driver.id===this.driverId})
  }
  passenger(){
    return store.passengers.find(function(passenger){return passenger.id===this.passengerId})
  }
}
