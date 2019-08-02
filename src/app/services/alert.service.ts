import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    public alertController: AlertController
  ) { }

  async presentAlert(alertInfo) {
    const { 
      header,
      subHeader,
      message,
      buttons
    } = alertInfo
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons,
      cssClass: 'alert'
    });

    await alert.present();
  }

}
