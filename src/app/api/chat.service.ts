import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { tap} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private readonly httpClient: HttpClient) { }

  getChatList(values: any): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/chatList`, values, {responseType: 'text'})
      .pipe(tap(_ => {
      }));
  }

  getGroupChatList(values: any): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/groupChatList`, values, {responseType: 'text'})
      .pipe(tap(_ => {
      }));
  }

  getMessages(id: any):Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/messages?id=` + id, {responseType: 'text'})
      .pipe(tap(_ => {}));
  }

  getGroupMessages(id: any):Observable<any> {
    return this.httpClient.get(`${environment.serverURL}/groupmessages?id=` + id, {responseType: 'text'})
      .pipe(tap(_ => {}));
  }

  sendMessage(values: any): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/messages`, values, {responseType: 'text'})
      .pipe(tap(_ => {
      }));
  }

  
}
