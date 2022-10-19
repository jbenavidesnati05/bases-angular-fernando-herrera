import { Component } from '@angular/core';
@Component({
    selector:'app-contador',
    template:
    `
    <h1>{{titulo}}</h1>
<!-- <span>0</span> -->
<h3>Suma de uno en uno</h3>
<button (click)="acumular(-1)">-1</button>
<span> {{numero}} </span>
<button (click)="acumular(+1)">+1</button>
<!-- suma de 5 en 5 -->
<h3>Suma de cinco en cinco</h3>
<button (click)="acumular5(-base)">-5</button>
<span> {{basefija}} </span>
<button (click)="acumular5(+base)">+5</button>

    
    `
})
export class ContadorComponent{
    public titulo:string = 'App contador';
        numero :number =10;
        acumular(valor:number){
          this.numero +=valor
        }
        basefija:number =55;
        base    :number =5;
        acumular5(base:number){
          this.basefija += base
        }
        // sumar(){
        //   this.numero +=1;
        // }
        // restar(){
        //   this.numero -=1;
        // }


}