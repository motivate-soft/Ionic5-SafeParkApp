import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  public driver: any = null;
  public flag: boolean = false;

  currentLat: any = 0;
  currentLng: any = 0;
  constructor(private readonly httpClient: HttpClient) {
  }

////////////////////////////////////////////////////////////////////
  
  //Get User Data from Db
  public getUserData(userId: any): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/getUserData?currentUserId=` + userId)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //Add New Device
  addDevice(values: any, userId: any): Observable<any> {
    
    let obj = {
      "name": values.name,
      "plateNo": values.plateNo,
      "email": values.email,
      "phoneNumber": values.phoneNumber,
      "imei": values.imei,
      "userId": userId
    }
    
    return this.httpClient.post(`${environment.serverURL}/add_device`, obj, {responseType: 'text'})
      .pipe(tap(res => this.responseMessage(res)));
  }

  //get All Devices
  getAllDevices(userId: any): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/getAllDevices?currentUserId=` + userId)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //get All Devices
  getTotalDevices(): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/getTotalDevices`)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //get All Wifies
  getAllWifies(): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/getAllWifies`)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //get vehicle ssid of wifi
  getVehicles(vehicleId: any): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/getSelectedVehicles?vehicleId=` + vehicleId)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //get All Alerts
  getAllAlerts(vehicleId: any): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/getAllAlerts?vehicleId=` + vehicleId)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //Delete Device
  deleteDevice(deviceId: any): Observable<any> {
    let obj = {
      "deviceId": deviceId
    }
    return this.httpClient.post(`${environment.serverURL}/deleteDevice`, obj)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //Edit Device Data
  editDevice(values: any): Observable<any> {
    return this.httpClient.post(`${environment.serverURL}/editDevice`, values)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //Update Vehicle data
  updateArm(values: any): Observable<any> {
    return this.httpClient.post(`${environment.serverURL}/updateArm`, values)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //Update Vehicle data
  updateVehicleData(values: any): Observable<any> {
    return this.httpClient.post(`${environment.serverURL}/updateVehicleData`, values)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //Turn on off
  turnOnOff(value: any): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/turn-on-off?vehicleId=` + value)
      .pipe(tap(res => this.responseMessage(res)));
  }

  

  //Emergency and Call 911
  emergency(value: any): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/emergency?vehicleId=` + value)
      .pipe(tap(res => this.responseMessage(res)));
  }
  
  
  //get All Clients
  getAllClients(): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/getAllClients`)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //addd Wifi 
  addWifi(values: any): Observable<any> {
    return this.httpClient.post(`${environment.serverURL}/addWifi`, values)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //delete Wifi 
  deleteWifi(vehicleId: any): Observable<any> {
    let obj = {
      "vehicleId": vehicleId
    }
    return this.httpClient.post(`${environment.serverURL}/deleteWifi`, obj)
      .pipe(tap(res => this.responseMessage(res)));
  }

  //change Wifi 
  changeVehicleState(values: any): Observable<any> {
    return this.httpClient.post(`${environment.serverURL}/changeVehicleState`, values)
      .pipe(tap(res => this.responseMessage(res)));
  }
  
  //connect Wifi 
  connectState(values: any): Observable<any> {
    return this.httpClient.post(`${environment.serverURL}/connectState`, values)
      .pipe(tap(res => this.responseMessage(res)));
  }
  
  getDriver(values: any): Observable<any> {
    return this.httpClient.post(`${environment.serverURL}/getDriver`, values)
      .pipe(tap(res => {
        this.driver = res;
        this.responseMessage(res)}));
  }

  updateProfile(values: any): Observable<any> {
    return this.httpClient.post(`${environment.serverURL}/change-profile`, values)
      .pipe(tap(res => this.responseMessage(res)));
  }

/////////////////////////////////////////////////////////////
  





  // Get User type
  public getUsertype(values: any): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/getUsertype?currentUserId=` + values)
      .pipe(tap(res => this.responseMessage(res)));
  }
  
  // Group management
  public groups(): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/groups`)
      .pipe(tap(res => this.responseMessage(res)));
  }

  updateAdmin(values: any): Observable<any> {
    return this.httpClient.put(`${environment.serverURL}/updateAdmin/` + values.id, values, {responseType: 'text'})
      .pipe(tap(res => this.responseMessage(res)));
  }

  deleteUser(values: any): Observable<any> {
    return this.httpClient.delete(`${environment.serverURL}/deleteUser/` + values, {responseType: 'text'})
      .pipe(tap(res => this.responseMessage(res)));
  }

  refresh(userId: any, selectedDate:any): Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/goRefreshReport?userId=` + userId + "&selectedDate=" + selectedDate, {responseType: 'text'})
      .pipe(tap(res => this.responseMessage(res)));
  }


  responseMessage(res: any): string {
    return res;
  }

  // To edit user's details
  checkingPwd(values: any): Observable<any> {
    return this.httpClient.put(`${environment.serverURL}/checkingPwd/` + values.id, values, {responseType: 'text'})
      .pipe(tap(res => this.responseMessage(res)));
  }
}
