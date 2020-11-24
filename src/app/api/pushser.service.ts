import { Injectable } from '@angular/core';
import Pusher from 'pusher-js'

import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PushserService {

  channel;
  constructor() {
    var pusher = new Pusher(environment.PUSHER_KEY, {
      cluster: environment.PUSHER_CLUSTER,
      forceTLS: true
    });
    this.channel = pusher.subscribe('chat');
   }
  
   public init() {
    return this.channel;
  }
}
