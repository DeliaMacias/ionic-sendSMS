import { Component } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contact } from '@ionic-native/contacts/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  phone;
  myContacts: any = [
    {
      name: 'Delia',
      lastname: 'Macias',
      phone: '3221190122'
    },
    {
      name: 'Mamá',
      lastname: 'Macias',
      phone: '3271024201'
    }
  ];

  constructor(  private contacts: Contact,
                private callNumber: CallNumber,
                private sms: SMS,
                private toastCtrl: ToastController) {


  }
  loadContact() {
    /*
    const options = {
      filter: '',
      multiple: true,
      hasPhoneNumber: true
    };
    this.contacts.find(['phoneNumbers'], options).then((contacts: Contact[]) => {
      this.myContacts = contacts;
      console.log('Contacts: ', contacts);
    });
    */
  }

  sendSms(contact: any) {
    console.log(contact);
    this.sms.send(contact, 'This is my prodefined message to you');
    alert(JSON.stringify('Enviando message a ', contact));
  }
  call(contact) {
    console.log(contact);
    this.callNumber.callNumber(contact, true);
    alert(JSON.stringify('Llamando a ', contact));
  }
  delete(name) {
    alert(JSON.stringify('Se eliminó a ', name));

  }

  /*
  sendSms() {
    const number = ((document.getElementById('numberTxt') as HTMLInputElement).value).toString();
    const message = ((document.getElementById('messageTxt') as HTMLInputElement).value);
    console.log('"number="' + number + '", message= "' + message);

    // this.phone = this.convertArrayphone(number);
    // console.log(this.phone);

    options: {
      replaceLineBreaks: false,
      android: {
        // tslint:disable-next-line: no-unused-expression
        intent: 'INTENT'
      }
    };

    this.sms.send('1234567890', message)
      .then(() => {
        console.log('sms worked');
      }).catch( (err) => {
        alert(JSON.stringify(err));
      });
  }
  convertArrayphone( phones) {
    if ( typeof phones === 'string' && phones.indexOf(',') !== -1) {
      phones = phones.split(',');
    }
    if (Object.prototype.toString.call(phones) !== '[object Array]') {
      phones = [phones];
    }
    return phones;

  }
  requestSMSPermission() {

  }*/
}
