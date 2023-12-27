import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import logoImg from "@salesforce/resourceUrl/logo";

export default class Logo extends NavigationMixin(LightningElement) {
    get logo() {
        return logoImg;
    }

    navigateToHome() {
        this[NavigationMixin.Navigate]({
            type: "comm__namedPage",
            attributes: {
                name: "Home"
            }
        });
    }
}
