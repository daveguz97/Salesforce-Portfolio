import { LightningElement } from "lwc";
import meImg from "@salesforce/resourceUrl/me";
import homeBackground from "@salesforce/resourceUrl/HomeBackgroundImage";

export default class Home extends LightningElement {
    get img() {
        return meImg;
    }

    // TODO Give Credit to Image by <a href="https://www.freepik.com/free-vector/gradient-mountain-landscape_20008477.htm#query=hiking%20background&position=6&from_view=keyword&track=ais&uuid=dbefd296-07d5-4e33-adda-d5e16fba9c4f">Freepik</a>
    get backgroundImg() {
        return `background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeBackground}); background-size: cover; background-position: center; background-repeat: no-repeat; background-attachment: fixed; overflow: hidden;`;
    }
}
