import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public androidPermissions: AndroidPermissions,
    private statusBar: StatusBar
  ) {
      this.initializeApp();
      this.permisoSms();

  }
  permisoSms() {
    this .androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS)
    .then( success => console.log ( 'Permiso Aprobado' ),
    err => this.androidPermissions.requestPermission( this.androidPermissions.PERMISSION.READ_SMS)
    );

    this .androidPermissions.requestPermissions ([ this .androidPermissions.PERMISSION.READ_SMS]);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.permisoSms();
    });
  }
}
