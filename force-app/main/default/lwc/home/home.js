import { LightningElement } from 'lwc';

export default class Home extends LightningElement {
	showSplashScreen

	connectedCallback() {
		this.showSplashScreen = true;
	}

	removeSplashHandler() {
		this.showSplashScreen = false;
	}
}