import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { PrefeitoComponent } from './pages/prefeito/prefeito.component';
import { SecretariasComponent } from './pages/secretarias/secretarias.component';
import { SecsaudeComponent } from './pages/secsaude/secsaude.component';
import { SecagroComponent } from './pages/secagro/secagro.component';
import { SecculturaComponent } from './pages/seccultura/seccultura.component';
import { SeceducacaoComponent } from './pages/seceducacao/seceducacao.component';
import { SecsocialComponent } from './pages/secsocial/secsocial.component';
import { SecobrasComponent } from './pages/secobras/secobras.component';
import { SecadmComponent } from './pages/secadm/secadm.component';
import { SecchefegabineteComponent } from './pages/secchefegabinete/secchefegabinete.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { GaleriafotosComponent } from './pages/galeriafotos/galeriafotos.component';
import { HinobandeiraComponent } from './pages/hinobandeira/hinobandeira.component';
import { DiariosComponent } from './pages/diarios/diarios.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'institucional', component: InstitucionalComponent },
    { path: 'institucional/prefeito', component: PrefeitoComponent },
    { path: 'secretarias', component: SecretariasComponent },
    { path: 'secretarias/secsaude', component: SecsaudeComponent },
    { path: 'secretarias/secagro', component: SecagroComponent },
    { path: 'secretarias/seccultura', component: SecculturaComponent },
    { path: 'secretarias/seceducacao', component: SeceducacaoComponent },
    { path: 'secretarias/secsocial', component: SecsocialComponent },
    { path: 'secretarias/secobras', component: SecobrasComponent },
    { path: 'secretarias/secadministracao', component: SecadmComponent },
    { path: 'secretarias/chefegabinete', component: SecchefegabineteComponent },
    { path: 'cidade/historia', component: HistoriaComponent },
    { path: 'cidade/galeriafotos', component: GaleriafotosComponent },
    { path: 'cidade/hinobandeira', component: HinobandeiraComponent },
    { path: 'diario', component: DiariosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent },

];
