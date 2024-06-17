import { AngularFireAuth, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { WordpressListPage } from '../wordpress/list/wordpress.list.page';
import { SlideBoxPage } from '../slide-box/slide-box.page';
import { GoogleMapsPage } from '../google-maps/google-maps.page';

import { Tile } from './models/tile.model';
import { EmailService } from '../../services/email.service';
import { CallService } from '../../services/call.service';
import { MapsService } from '../../services/maps.service';
import { InAppBrowserService } from '../../services/in-app-browser.service';
import { data } from './home-data';
import { Profile } from '../../models/profile';

@Component({
	templateUrl: 'home.html',
	providers: []
})
export class HomePage {

	profileData: FirebaseObjectObservable<Profile>
		
	public tiles: Tile[][];

	private emailService: EmailService;
	private callService: CallService;
	private mapsService: MapsService;
	private browserService: InAppBrowserService;
	private nav: Nav;

	constructor(
		private afAuth: AngularFireAuth,
		private afDatabase: AngularFireDatabase,
		emailService: EmailService,
		callService: CallService,
		mapsService: MapsService,
		browserService: InAppBrowserService,
		nav: Nav
	) {
		this.emailService = emailService;
		this.callService = callService;
		this.mapsService = mapsService;
		this.browserService = browserService;
		this.nav = nav;
		this.initTiles();

		this.profileData = this.afDatabase.object('profile/${data.uid}')
	}

	public navigateTo(tile) {
		this.nav.setRoot(tile.component);
	}

	public getDirections() {
		this.mapsService.openMapsApp(data.officeLocation);
	}

	public sendEmail() {
		this.emailService.sendEmail(data.email);
	}

	public openFacebookPage() {
		this.browserService.open(data.facebook);
	}

	public callUs() {
		this.callService.call(data.phoneNumber);
	}

	private initTiles(): void {
		this.tiles = [[{
			title: 'Wordpress',
			path: 'wordpress-articles',
			icon: 'logo-wordpress',
			component: WordpressListPage
		}, {
			title: 'Slides',
			path: 'slides',
			icon: 'swap',
			component: SlideBoxPage
		}], [{
			title: 'Map',
			path: 'map',
			icon: 'map',
			component: GoogleMapsPage
		}]];
	}
}
