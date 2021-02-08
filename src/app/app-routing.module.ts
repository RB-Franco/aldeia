import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';

//PAGES -- inicio
// Home
import {HomeComponent} from './Pages/Inicio/home.component';
//Empresa
import {TabelaEmpresaMainComponent} from './Pages/Empresa/consultar-empresa/tabela-empresa-main/tabela-empresa-main.component';
import { TabelaCatalogoMainComponent } from './Pages/Catalogo/tabela-catalogo/tabela-catalogo-main/tabela-catalogo-main.component';
import { TabelaFornecedorMainComponent } from './Pages/Fornecedor/consultar-fornecedor/tabela-fornecedor-main/tabela-fornecedor-main.component';
import { TabelaProdutoMainComponent } from './Pages/Produto/consultar-produto/tabela-produto-main/tabela-produto-main.component';
import { TabelaUsuarioMainComponent } from './Pages/Usuario/consultar-usuario/tabela-usuario-main/tabela-usuario-main.component';
import { TabelaPedidoMainComponent } from './Pages/Vendas/consulta-pedido/tabela-pedido-main/tabela-pedido-main.component';
import { TabelaClienteMainComponent } from './Pages/Cliente/tabela-cliente/tabela-cliente-main/tabela-cliente-main.component';

import { CadastroPedidoComponent } from './Pages/Vendas/cadastro-pedido/cadastro-pedido.component';
import { CadastroEmpresaComponent } from './Pages/Empresa/cadastro-empresa/cadastro-empresa.component';
import { CadastroCatalogoComponent } from './Pages/Catalogo/cadastro-catalogo/cadastro-catalogo.component';
import { CadastroFornecedorComponent } from './Pages/Fornecedor/cadastro-fornecedor/cadastro-fornecedor.component';
import { CadastroProdutoComponent } from './Pages/Produto/cadastro-produto/cadastro-produto.component';
import { CadastroUsuarioComponent } from './Pages/Usuario/cadastro-usuario/cadastro-usuario.component';
import { CadastroClienteComponent } from './Pages/Cliente/cadastro-cliente/cadastro-cliente.component';
//PAGES -- Fim

// // UserPages
// import {ForgotPasswordBoxedComponent} from './Pages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
// import {LoginBoxedComponent} from './Pages/UserPages/login-boxed/login-boxed.component';
// import {RegisterBoxedComponent} from './Pages/UserPages/register-boxed/register-boxed.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [

      //Inicio
      {path: '', component: HomeComponent, data: {extraParameter: 'dashboardsMenu'}},

      //Empresa
      {path: 'tabela/empresa', component: TabelaEmpresaMainComponent, data: {extraParameter: 'tablesMenu'}},
      {path: 'cadastro/empresa', component: CadastroEmpresaComponent, data: {extraParameter: 'formElementsMenu'}},
      //Catalogo
      {path: 'tabela/catalogo', component: TabelaCatalogoMainComponent, data: {extraParameter: 'tablesMenu'}},
      {path: 'cadastro/catalogo', component: CadastroCatalogoComponent, data: {extraParameter: 'formElementsMenu'}},
      //Cliente
      {path: 'tabela/cliente', component: TabelaClienteMainComponent, data: {extraParameter: 'tablesMenu'}},
      {path: 'cadastro/cliente', component: CadastroClienteComponent, data: {extraParameter: 'formElementsMenu'}},
      //Fornecedor
      {path: 'tabela/fornecedor', component: TabelaFornecedorMainComponent, data: {extraParameter: 'tablesMenu'}},
      {path: 'cadastro/fornecedor', component: CadastroFornecedorComponent, data: {extraParameter: 'formElementsMenu'}},
      //Produto
      {path: 'tabela/produto', component: TabelaProdutoMainComponent, data: {extraParameter: 'tablesMenu'}},
      {path: 'cadastro/produto', component: CadastroProdutoComponent, data: {extraParameter: 'formElementsMenu'}},
      //Usuario
      {path: 'tabela/usuario', component: TabelaUsuarioMainComponent, data: {extraParameter: 'tablesMenu'}},
      {path: 'cadastro/usuario', component: CadastroUsuarioComponent, data: {extraParameter: 'formElementsMenu'}},
      //Venda
      {path: 'tabela/pedido', component: TabelaPedidoMainComponent, data: {extraParameter: 'tablesMenu'}},
      {path: 'cadastro/pedido', component: CadastroPedidoComponent, data: {extraParameter: 'formElementsMenu'}},      
    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages

      // {path: 'pages/login-boxed', component: LoginBoxedComponent, data: {extraParameter: ''}},
      // {path: 'pages/register-boxed', component: RegisterBoxedComponent, data: {extraParameter: ''}},
      // {path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: {extraParameter: ''}},
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
