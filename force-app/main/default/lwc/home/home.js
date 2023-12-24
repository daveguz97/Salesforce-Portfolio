import { LightningElement } from "lwc";
import meImg from "@salesforce/resourceUrl/me";

export default class Home extends LightningElement {
	
    get img() {
        return meImg;
    }
}