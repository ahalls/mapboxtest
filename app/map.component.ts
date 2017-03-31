import { Component } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GC } from 'utils/utils';

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
        GC();
        console.log("onBackTap:GC()");
    }
    
    public onMapReady(args) {

    }
}
