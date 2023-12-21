import { LightningElement, wire } from "lwc";
import getBadges from "@salesforce/apex/badgesController.getBadges";

export default class Modules extends LightningElement {
    modules;
    projects;
    superbadges;
    error;
    moduleType = {
        type: "Module"
    };

    projectType = {
        type: "Project"
    };

    superbadgeType = {
        type: "Superbadge"
    };

    @wire(getBadges, { bindParams: "$moduleType" })
    wiredModules({ error, data }) {
        try {
            if (data) {
                this.modules = data;
                this.error = undefined;
                this.renderIconsAndText(this.modules);
                console.log(this.modules);
            } else {
                this.error = error;
                console.log(this.error);
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }

    @wire(getBadges, { bindParams: "$projectType" })
    wiredProjects({ error, data }) {
        try {
            if (data) {
                this.projects = data;
                this.error = undefined;
                this.renderIconsAndText(this.projects);
                console.log(this.projects);
            } else {
                this.error = error;
                console.log(this.error);
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }

    @wire(getBadges, { bindParams: "$superbadgeType" })
    wiredSuperbadges({ error, data }) {
        try {
            if (data) {
                this.superbadges = data;
                this.error = undefined;
                this.renderIconsAndText(this.superbadges);
                console.log(this.superbadges);
            } else {
                this.error = error;
                console.log(this.error);
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }

    renderIconsAndText(badgeData) {
        let modulesContainer =
            this.template.querySelector(".modules-container");
        let projectContainer = this.template.querySelector(
            ".projects-container"
        );
        let superBadgeContainer = this.template.querySelector(
            ".superbadges-container"
        );
        badgeData.forEach((badge) => {
            let group = document.createElement("div");
            group.classList.add("group");
            let type = badge.trailheadapp__Badge__r.trailheadapp__Type__c;
            let icon = badge.trailheadapp__Badge_Icon__c;
            let title = badge.trailheadapp__Badge__r.Name;
            let smallText = document.createElement("small");
            group.innerHTML += icon;
            smallText.textContent = title;
            group.appendChild(smallText);
            switch (type) {
                case "Module":
                    modulesContainer.appendChild(group);
                    break;
                case "Project":
                    projectContainer.appendChild(group);
                    break;
                case "Superbadge":
                    superBadgeContainer.appendChild(group);
                    break;
                default:
                    console.log("Type is invalid");
            }
        });
    }
}
