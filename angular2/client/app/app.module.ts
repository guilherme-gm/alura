import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Vai rodar no navegador
import { AppComponent } from './app.component';
import { FotoModule } from "./foto/foto.module";
import { HttpModule } from "@angular/http";
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from "./app.routes";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule
    ], // Como vai rodar no browser, importa ele
    declarations: [AppComponent, CadastroComponent, ListagemComponent], // Componentes que fazem parte dele
    bootstrap: [AppComponent] // O que ele vai carregar quando iniciar
})
export class AppModule {

}