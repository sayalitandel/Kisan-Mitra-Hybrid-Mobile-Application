import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: 'AIzaSyDYaZXlRIjcjm9VIPoJWmEAVjONHBLP0Bg',
		authDomain: 'kisanmitra-181218.firebaseapp.com',
		databaseURL: 'https://kisanmitra-181218.firebaseio.com',
		projectId: 'kisanmitra-181218',
		storageBucket: 'kisanmitra-181218.appspot.com',
		messagingSenderId: '555296005620'
	}
};
