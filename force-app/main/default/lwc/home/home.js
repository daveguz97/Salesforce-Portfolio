import { LightningElement } from "lwc";
import meImg from "@salesforce/resourceUrl/me";

export default class Home extends LightningElement {
	
    get img() {
        return meImg;
    }

    get backgroundColor() {
        return `background-color: #042B44; background-size: cover; background-position: center;overflow: hidden;`;
    }
}