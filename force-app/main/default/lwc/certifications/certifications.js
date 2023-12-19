import { LightningElement } from "lwc";
import AdminCert from "@salesforce/resourceUrl/AdminCertificate";
import OmniStudioCert from "@salesforce/resourceUrl/OmniStudioCertificate";
import PD1Cert from "@salesforce/resourceUrl/PD1Certificate";
let id = 0;
const IMAGES = [
	{
		id: id++,
		src: AdminCert,
		alt: "Admin Certificate"
	},
	{
		id: id++,
		src: OmniStudioCert,
		alt: 'OmniStudio Certificate'
	},
	{
		id: id++,
		src: PD1Cert,
		alt: 'Platform Developer 1 Certificate'
	}
];
export default class Certifications extends LightningElement {
    images = IMAGES
}