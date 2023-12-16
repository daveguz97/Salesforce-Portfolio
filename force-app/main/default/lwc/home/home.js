import { LightningElement } from 'lwc';

export default class Home extends LightningElement {
	showSplashScreen = true;

	connectedCallback() {
		this.removeSplashScreen();
	}

	removeSplashScreen() {
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		setTimeout(() => {
			this.showSplashScreen = false;
		}
		, 3000);
	}
}