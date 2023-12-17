import { LightningElement, wire } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import { CurrentPageReference } from "lightning/navigation";

let id;
const MENU_ITEMS = [
    {
        id: id++,
        label: "Home",
		apiName: 'Home'
    },
    {
        id: id++,
        label: "About Me",
		apiName: 'about__c'
    },
    {
        id: id++,
        label: "Experience",
		apiName: 'experience__c'
    },
    {
        id: id++,
        label: "Projects",
		apiName: 'projects__c'
    },
    {
        id: id++,
        label: "Contact",
		apiName: 'contact__c'
    }
];
export default class Navbar extends NavigationMixin(LightningElement) {
    menuItems;

    @wire(CurrentPageReference)
    pageRef;

    connectedCallback() {
        this.menuItems = MENU_ITEMS;
        console.log("Menu Items", this.menuItems);
    }

    handleOnClick(event) {
        const path = event.currentTarget.dataset.path;
        console.log("label", path);
        try {
            this[NavigationMixin.Navigate]({
                type: "comm__namedPage",
                attributes: {
                    name: path
                }
            });
        } catch (error) {
            console.log("error", error);
        }
    }
}
