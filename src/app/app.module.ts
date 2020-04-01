import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { TodoReducer } from './reducers/todo.reducer';
import { TodoComponent } from "./components/todo/todo.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";

@NgModule({
  declarations: [
    AddTodoComponent,
    TodoComponent,
    AppComponent
  ],
  entryComponents: [],
  imports: [
    StoreModule.forRoot({todos: TodoReducer}),
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
