// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
  drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  newDrivers = [...drivers, name]
  return newDrivers
}

funciton prependDriver(name){
  prependDrivers = drivers 
  prependDriers.unshift(name)
  return prependDrivers

}
