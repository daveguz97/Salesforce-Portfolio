import { LightningElement } from 'lwc';
import logoImg from '@salesforce/resourceUrl/logo'

export default class Logo extends LightningElement {
	get logo() {
		return logoImg;
	}
}