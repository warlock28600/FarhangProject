import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Constants} from "./constants";
import {ServicePath} from "./service.path";

@Injectable({
  providedIn: 'root'
})
export class ServiceApi {

  constructor(private http: HttpClient) {
  }


  getAllPerson(): Observable<any> {
    return this.http.get(Constants.servicePath + ServicePath.GET_ALL_PERSON)
  }


}
