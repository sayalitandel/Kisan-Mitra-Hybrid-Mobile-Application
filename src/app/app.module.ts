import { AgmCoreModule } from '@agm/core';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Config } from '../config';

import { ComponentsModule } from '../pages/components/components.module';
import { GoogleMapsModule } from '../pages/google-maps/google-maps.module';
import { HomeModule } from '../pages/home/home.module';
import { SlideBoxModule } from '../pages/slide-box/slide-box.module';
import { WordpressModule } from '../pages/wordpress/wordpress.module';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../config';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';
import { SignupPage } from '../pages/signup/signup';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
	declarations: [
		MyApp,
		LoginPage,
		SignupPage,
		ProfilePage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		AgmCoreModule.forRoot(),

		AngularFireModule.initializeApp(firebaseConfig.fire),
		AngularFireAuthModule,
		AngularFireDatabaseModule,

		ComponentsModule,
		NgxErrorsModule,
		GoogleMapsModule,
		HomeModule,
		SlideBoxModule,
		WordpressModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		LoginPage,
		SignupPage,
		ProfilePage
	],
	providers: [
		Config,
		StatusBar,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		AngularFireAuth,
		AuthService
	]
})
export class AppModule {
}
