export class CounterService {
    activeToInaciveCounter = 0;
    inactiveToAciveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInaciveCounter++;
        console.log('Active to Inactive ' + this.activeToInaciveCounter);
    }

    incrementInaciveToActive() {
        this.inactiveToAciveCounter++;
        console.log('Inactive to Active ' + this.inactiveToAciveCounter);
    }
}