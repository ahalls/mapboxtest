import { Component } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";;

@Component({
    selector: 'tap',
    templateUrl: "tap.component.html",
})
export class TapComponent {
    public counter: number = 16;

   constructor(
        private _routerExtensions: RouterExtensions
    ) { }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }

    public onMapTap() {
        this._routerExtensions.navigate(["/map"], 
            <any>  { clearHistory: true });
    }
}
