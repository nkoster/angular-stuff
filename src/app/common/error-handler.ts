import { ErrorHandler } from '@angular/core'

export class AppErrorHandler implements ErrorHandler {
    handleError(error) {
        alert('Unexpected error');
        console.log(error)
    }

}
