import { LightningElement, wire } from "lwc";
import getBadges from "@salesforce/apex/badgesController.getBadges";

export default class Modules extends LightningElement {
    modules;
    error;
	type = {
		trailheadapp__Type__c:  'Module'
	}

    @wire(getBadges, {bindParams: '$type'})
    wiredModules({ error, data }) {
        try {
            if (data) {
                this.modules = data;
                this.error = undefined;
                this.renderIcons();
				console.log(this.modules)
            } else {
                this.error = error;
				console.log(this.error)
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }

    renderIcons() {
        let container = this.template.querySelector(".container");
		
		console.log('module', this.modules)
		
        this.modules.forEach((module) => {
			let group = document.createElement('div');
			group.classList.add('group');
			container.appendChild(group);
			group.innerHTML += module.trailheadapp__Badge_Icon__c;
			let h4 = document.createElement('small')
			h4.textContent = module.trailheadapp__Badge__r.Name
			group.appendChild(h4);
        });
    }
}
