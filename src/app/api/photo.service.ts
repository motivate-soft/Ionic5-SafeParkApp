import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];
  public kitaPicture: Photo = null;

  myphoto: any; // base64 Image
  public kitaImageName: any; // uploaded picture name
  public kitaImagePath: any; //                  path
  public userImageName: any;

  kitaImagePathChange: Subject<string> = new Subject<string>();
  userImagePathChange: Subject<string> = new Subject<string>();

  constructor(
    private camera: Camera, 
    private storage: Storage,
    private transfer: FileTransfer,
    private httpClient: HttpClient,
    private loadingController: LoadingController) 
    { 
    }

  async takePicture(sourceType = 0) { // 0 - local, 1 - Camera
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType,
      targetWidth: 400,
      targetHeight: 400
    }

    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Uploading'
    });
    
    this.camera.getPicture(options).then((imageData) => {
      
      this.myphoto = imageData;

      let obj = {
        "file": this.myphoto
      }

      loading.present();

      this.httpClient.post(`${environment.serverURL}/uploadKita`, obj, {responseType: 'text'})
        .subscribe((_)=>{
          let response = JSON.parse(_);
          if(response.status)
          {
            this.kitaImageName = response.imageName;
            this.kitaImagePathChange.next(response.path);

            loading.dismiss();
          }

          loading.dismiss();
        },
        err=>{
          
          loading.dismiss();
        });

    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });

  }


  async takeUserPicture(sourceType = 0) { // 0 - local, 1 - Camera
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType,
      targetWidth: 400,
      targetHeight: 400
    }

    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Uploading'
    });
    
    this.camera.getPicture(options).then((imageData) => {
      
      this.myphoto = imageData;

      let obj = {
        "file": this.myphoto
      }

      loading.present();

      this.httpClient.post(`${environment.serverURL}/uploadUserPicture`, obj, {responseType: 'text'})
        .subscribe((_)=>{
          let response = JSON.parse(_);
          if(response.status)
          {
            this.userImageName = response.imageName;
            this.userImagePathChange.next(response.path);

            console.log(response);

            loading.dismiss();
          }

          loading.dismiss();
        },
        err=>{
          
          loading.dismiss();
        });

    }, (err) => {
     // Handle error
     console.log("Camera issue: " + err);
    });

  }
}




class Photo {
  data: any;
  kitaImagePath: any;
}
