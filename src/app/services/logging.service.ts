export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server Status changed, new status: ' + status );
    }
}