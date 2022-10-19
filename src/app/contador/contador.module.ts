import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from '../heroes/heroes.modulo';
import { AppComponent } from '../app.component';

@NgModule({
    declarations:[
        ContadorModule

    ],
    exports:[
        BrowserModule,
        HeroesModule,
        ContadorModule

    ],
    providers:[],
    bootstrap:[
        AppComponent
    ]
})

export class ContadorModule{}
