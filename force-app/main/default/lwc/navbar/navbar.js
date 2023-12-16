import getNavigationMenuItems from "@salesforce/apex/NavigationLinkSetPickList.getNavigationMenuItems";
import { LightningElement, api, wire, track } from "lwc";
import {CurrentPageReference} from 'lightning/navigation';

export default class Navbar extends LightningElement {
    @api linkSetMasterLabel;

	@api addHomeMenuItem = false;

	@api includeImageUrls = false;

    @track menuItems = [];

    @track isLoaded = false;

    @track error;

    publishStatus;

	@wire(getNavigationMenuItems, {
		navigationLinkSetMasterLabel: '$linkSetMasterLabel',
		publishStatus: '$publishStatus',
		addHomeMenuItem: '$addHomeMenuItem',
		includeImageUrl: '$includeImageUrls'
	})
	wiredMenuItems({ error, data }) {
		if(data && !this.isLoaded) {
			this.menuItems = data.map((item, index) => {
				return {
					target: item.actionValue,
					id: index,
					label: item.label,
					imageUrl: item.imageUrl
				};
			});
			this.error = undefined;
			this.isLoaded = true;
		} else if (error) {
			this.error = error;
			this.menuItems = [];
			this.isLoaded = true;
			console.error(`Navigation menu error: ${JSON.stringify(this.error)}`);
		}
	}

	@wire(CurrentPageReference)
	setCurrentPageReference(currentPageReference) {
		const app = currentPageReference && currentPageReference.state && currentPageReference.state.app;

		if(app === 'commeditor') {
			this.publishStatus = 'Draft';
		} else {
			this.publishStatus = 'Live';
		}
	}
}
