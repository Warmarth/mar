// @ts-check

export class ArgumentError extends Error {
  constructor(message = 'invalid or null argument'){
    super(message)
    this.message = 'ArgumentError'
  }
}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
 if (humidityPercentage >= 100) {
    throw new Error("invalid");
  }
}

/**
 * Check if the temperature is not too 
 high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError(temperature)
  }
  if (temperature > 500) {
    throw new OverheatingError(temperature)
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  const { check,alertDeadSensor,alertOverheating,shutdown,} = actions
  try { 
     check()
  } catch (error) {
    if(error instanceof ArgumentError){
      alertDeadSensor()
    } else if(error instanceof OverheatingError){
      if(error.temperature < 600){
        alertOverheating()
      }else{
        shutdown()
      }
    } else{
      throw (error)
    }
  }
}