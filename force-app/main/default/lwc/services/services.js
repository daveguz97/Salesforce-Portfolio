import { LightningElement } from 'lwc';

let id = 0;
const ICONS = [
    {
        id: id++,
        name: "utility:apex",
        alternativeText: "Apex Development",
        text: "Apex Development"
    },
    {
        id: id++,
        name: "utility:insert_tag_field",
        alternativeText: "Lightning Components",
        text: "Lightning Components"
    },
    {
        id: id++,
        name: "utility:setup",
        alternativeText: "Salesforce Administration",
        text: "Salesforce Administration"
    }
];

export default class Services extends LightningElement {
	icons = ICONS;
}