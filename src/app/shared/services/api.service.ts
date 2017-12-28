import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

export class ApiService {

    constructor(private http:HttpClient) {}

    get(path: string): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`)
        .catch(this.formatErrors)
        .map((response: Response) => response.json());
      }

    private formatErrors(error: any) {
        return Observable.throw(error.json());
     }

}