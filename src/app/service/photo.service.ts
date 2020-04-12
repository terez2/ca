import {Injectable} from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { Device } from '@ionic-native/device/ngx';


@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    constructor(private camera: Camera, private device: Device, private barcodeScanner: BarcodeScanner) {
    }

    takePicture() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            // Do something with the new photo

        }, (err) => {
            // Handle error
            console.log('Camera issue: ' + err);
        });
    }

    scan() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
        }).catch(err => {
            console.log('Error', err);
            console.log('Device', this.device);
        });
    }


    public async addNewToGallery() {
        // Take a photo
        /*const capturedPhoto = await Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source: CameraSource.Camera,
          quality: 100
        });*/
    }
}
