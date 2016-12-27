import { Component } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";

@Component({
    selector: "map",
    templateUrl: "map.component.html",
})
export class MapComponent {

   constructor(
        private _routerExtensions: RouterExtensions
    ) { }

    public onBackTap() {
        this._routerExtensions.navigate(["/tap"], 
            <any>  { clearHistory: true });
    }
    
    public onMapReady(args) {

    }
}
