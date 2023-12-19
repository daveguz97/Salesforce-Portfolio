import { LightningElement, wire } from "lwc";
import getModules from "@salesforce/apex/badgesController.getModules";

const COLUMNS = [
    { label: "Badge Icon", fieldName: "trailheadapp__Badge_Icon__c" },
    { label: "Name", fieldName: "trailheadapp__Badge__r.Name" }
];
export default class Modules extends LightningElement {
    error;
    columns = COLUMNS;

    @wire(getModules)
	modules
}
