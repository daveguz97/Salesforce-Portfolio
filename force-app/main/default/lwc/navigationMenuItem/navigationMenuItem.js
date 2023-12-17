import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationMenuItem extends NavigationMixin(LightningElement) {

    @api item = {};

    @track href = 'javascript:void(0);';

    pageReference;

    connectedCallback() {
        const { type, target } = this.item;
		console.log('type', type);
		console.log('target', target)
		console.log('item', JSON.stringify(this.item))
        
        if (!target) {
            // NOTE: if actionValue is null for a Salesforce Object menu item, you may not have created
            // the associated page(s) in your LWR site.
            console.log(`WARNING: Navigation menu item target (originally 'actionValue') is missing for menu item:\n ${JSON.stringify(this.item)}\n\nSkipping. Does the target route exist for the site?`);
            return;
        }

        if (type === 'InternalLink' || type === 'ExternalLink') {
            this.pageReference = {
                type: 'standard__webPage',
                attributes: {
                    url: target
                }
            };
        }

        if (this.pageReference) {
            this[NavigationMixin.GenerateUrl](this.pageReference)
                .then(url => {
                    this.href = url;
                });
        }
    }

    get label() {
        return this.item.label;
    }

    /**
     * Handle a click on this menu item, open the destination page.
     * 
     * For more menu item click handling tips, see https://developer.salesforce.com/blogs/2020/07/advanced-community-navigation-components
     * But note that we can't use window.open for InternalLink, unless Lightning Locker is disabled for the LWR site.
     * 
     * @param {Object} evt the click event
     */
    handleClick(evt) {
        // use the NavigationMixin from lightning/navigation to perform the navigation.
        evt.stopPropagation();
        evt.preventDefault();
        if (this.pageReference) {
            this[NavigationMixin.Navigate](this.pageReference);
        } else {
            console.error(`Navigation menu type "${this.item.type}" not implemented for item ${JSON.stringify(this.item)}`);
        }
    }

}