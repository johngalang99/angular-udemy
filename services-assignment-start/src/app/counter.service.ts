export class CounterService {
  activeToInactiveCounter: number = 0
  inactiveToActiveCounter: number = 0

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter)
  }

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter)
  }
}
