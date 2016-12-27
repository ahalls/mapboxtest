import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { routes, navigatableComponents  } from "./app.routing"
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    declarations: [AppComponent, ...navigatableComponents],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule,
             NativeScriptRouterModule,
             NativeScriptRouterModule.forRoot(routes)],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
