import { HomePage } from "./home/home.page";
import { DetailPageComponent } from "./detail-page/detail-page.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";

import { TodoService } from "./services/todo.service";
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: "home", component: HomePage },
  { path: "detail/:id", component: DetailPageComponent },
  { path: "", component: HomePage },
  { path: "not-found", component: NotfoundComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    DetailPageComponent,
    NotfoundComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TodoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
