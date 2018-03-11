// procura dentro de node_modules/@angular/core
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app', // Como vai acessar o component na view
    templateUrl: './app.component.html' // HTML que vai fazer apresentação, a partir da raiz
})
export class AppComponent {

}
