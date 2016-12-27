import { TapComponent } from "./tap.component";
import { MapComponent } from "./map.component";

export const routes = [
   {path: "", redirectTo: "tap", terminal: true, pathMatch: 'full'},
   {path: "tap", component: TapComponent},
   {path: "map", component: MapComponent },
];

export const navigatableComponents = [
  TapComponent,
  MapComponent
];