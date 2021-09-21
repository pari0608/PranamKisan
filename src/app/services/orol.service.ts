import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Route, Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpinnerService } from '../services/spinner.service';
declare var Orol:any;



@Injectable({
  providedIn: 'root'
})
export class OrolService {
  constructor( private router: Router, public httpClient: HttpClient,  private spinnerService: SpinnerService) { }

  public getAccessToken(phone){
    var obj = {
      "phoneNumber":phone
    };
    this.spinnerService.setSpinner(true);
    // return this.httpClient.post("", obj);
  }
  public signInPhone(phone){
    this.spinnerService.setSpinner(true);
    var obj = {
      "phoneNumber":phone
    };
    // return this.httpClient.post("", obj);
  }
  public signInWeb(email, phone){
    this.spinnerService.setSpinner(true);
    var obj = {
      "email":email,
      "phoneNumber":phone
    };
    // return this.httpClient.post("", obj);
  }


  public errorHandler(error:any){
    if(error){
      if (error == 'Error: Session expired'){ //401 Unauthorized
        Orol.login();
      }
      else if (error.status == 404){
        this.router.navigate(['/', '404']);
      }
      else if (error.status == 500){
        this.router.navigate(['/', '500']);
      }
    }
  }
}
