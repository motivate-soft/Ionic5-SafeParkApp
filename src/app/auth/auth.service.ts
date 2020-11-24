import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { JwtHelperService} from '@auth0/angular-jwt';
import { tap} from 'rxjs/operators';
import { environment} from '../../environments/environment';
import { NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

export class Response {
  token: string;
  userid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly jwtTokenName = 'jwt_token';
  private readonly usertype = 'u';
  private readonly userid = "user";
  
  public username: string;

  private authUser = new ReplaySubject<any>(1);
  public authUserObservable = this.authUser.asObservable();

  constructor(private readonly httpClient: HttpClient,
              private readonly navCtrl: NavController,
              private readonly jwtHelper: JwtHelperService,
              private storage: Storage) {

  }

  hasAccess(): Promise<boolean> {
   let jwt = localStorage.getItem(this.jwtTokenName);

   this.storage.get(this.jwtTokenName).then((token) => {
      jwt =  token;
    });
    
    if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {

      return new Promise((resolve, _) => {
        this.authUser.next(jwt);
        resolve(true);
      });

    } else {
      this.logout();
      return Promise.resolve(false);
    }
  }

  login(values: any): Observable<string> {
    this.username = values.username;

    let obj = {
      "username": values.username,
      "password": values.password
    }
    
    return this.httpClient.post(`${environment.serverURL}/login`, obj, {responseType: 'text'})
      .pipe(tap(jwt => this.handleJwtResponse(jwt)));
  }

  register(values: any): Observable<string> {
    
    let obj = {
      "fullName": values.fullName,
      "password": values.password,
      "userName": values.userName,
      "email": values.email,
      "phone": values.phone,
      "userType": values.userType
    }
    
    return this.httpClient.post(`${environment.serverURL}/register`, obj, {responseType: 'text'})
      .pipe(tap(jwt => this.handleJwtResponse(jwt)));
  }

  forgotPassword(values: any): Observable<string> {
    
    let obj = {
      "username": values.username,
      "useremail": values.useremail
    }
    
    return this.httpClient.post(`${environment.serverURL}/forgotPassword`, obj, {responseType: 'text'})
      .pipe(tap(jwt => this.handleJwtResponse(jwt)));
  }

  verifyCode(values: any): Observable<string> {
    
    return this.httpClient.post(`${environment.serverURL}/verifyCode`, values, {responseType: 'text'})
      .pipe(tap(jwt => this.handleJwtResponse(jwt)));
  }

  updatePassword(values: any): Observable<string> {
    
    return this.httpClient.post(`${environment.serverURL}/updatePassword`, values, {responseType: 'text'})
      .pipe(tap(jwt => this.handleJwtResponse(jwt)));
  }
  send(values: any): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/send`, values, {responseType: 'text'})
      .pipe(tap(res => this.responseMessage(res)));
  }

  responseMessage(res: any): string {
    return res;
  }

  logout() {
    localStorage.removeItem(this.jwtTokenName);
    this.authUser.next(null);
    this.navCtrl.navigateRoot('login', {replaceUrl: true});
  }

  signup(values: any): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/signup`, values, {responseType: 'text'})
      .pipe(tap(jwt => {
      }));
  }

  getAdminUser(values: any): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/getAdminUser`, values, {responseType: 'text'})
      .pipe(tap(jwt => {
      }));
  }

  getStudentUsers(values: any): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/getStudentUsers`, values, {responseType: 'text'})
      .pipe(tap(jwt => {
      }));
  }


  getCurrentUserId(): string {
      return localStorage.getItem("currentUserId");
  }

  setCurrentUserId(values: string){
    localStorage.setItem("currentUserId", values);
  }

  registerFCMToken(): Observable<string> {
    let deviceToken = localStorage.getItem('fcm');
    let userId = localStorage.getItem(this.userid);

    let values = {
      userId: userId,
      deviceToken: deviceToken
    }

    return this.httpClient.post(`${environment.serverURL}/registerFCMToken`, values, {responseType: 'text'})
      .pipe(tap(jwt => {
      }));
  }

  private handleJwtResponse(jwt: string): string {

    if(JSON.parse(jwt)['access_token'])
    {
      localStorage.setItem(this.jwtTokenName, JSON.parse(jwt)['access_token']);
      this.storage.set(this.jwtTokenName, JSON.parse(jwt)['access_token']);
    }

    if(JSON.parse(jwt)['userType'])
    {
      localStorage.setItem(this.usertype, JSON.parse(jwt)['userType']);
      this.storage.set(this.usertype, JSON.parse(jwt)['userType']);
    }

    this.authUser.next(jwt);

    if(JSON.parse(jwt)['userId'])
    {
      localStorage.setItem(this.userid, JSON.parse(jwt)['userId']);
      this.storage.set(this.userid, JSON.parse(jwt)['userId']);
      this.setCurrentUserId(JSON.parse(jwt)['userId']);
    }
    
    return jwt;
  }
}
