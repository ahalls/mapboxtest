import { Component, OnInit, OnDestroy, ViewChild, ElementRef, } from "@angular/core";
import {RouterExtensions} from "nativescript-angular/router";
import { GC } from 'utils/utils';
import { isIOS } from 'platform';

@Component({
    selector: "map",
    templateUrl: "map.component.html",
})
export class MapComponent implements OnDestroy {

   constructor(
        private _routerExtensions: RouterExtensions
    ) { }
    private mapbox;
    @ViewChild("mapboxview") mapboxViewRef: ElementRef;

    ngOnInit() {
        console.log("GroundComponent::ngOnInit");
        GC();
    }

   ngOnDestroy() {
       console.log("MapComponent::ngOnDestroy");
       //console.dump(this.mapboxViewRef.nativeElement);
       // this.mapbox.destroy();
    //    if (isIOS) {
    //              this.mapbox.mapView.removeFromSuperview();
    //              this.mapbox.mapView.delegate = null;
    //              this.mapbox.mapView = null;
    //    }
    //    setTimeout(() => this.cleanupAfterDelay(), 500)
        
    }
    cleanupAfterDelay() {
        console.log("MapComponent::cleanupAfterDelay:GC");
        GC();
    }
    public onBackTap() {
        this._routerExtensions.navigate(["/tap"], 
            <any>  { clearHistory: true });
        console.log("MapComponent::onBackTap:GC");
    }
    
    public onMapReady(args) {
        this.mapbox = args.map;
        console.log("MapComponent::onMapReady")
        console.dump(this.mapbox)
    }
}
