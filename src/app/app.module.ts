import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgReduxModule} from '@angular-redux/store';
import {NgRedux, DevToolsExtension} from '@angular-redux/store';
import {rootReducer, ArchitectUIState} from './ThemeOptions/store';
import {ConfigActions} from './ThemeOptions/store/config.actions';
import {AppRoutingModule} from './app-routing.module';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';

// BOOTSTRAP COMPONENTS
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {ChartsModule} from 'ng2-charts';

// LAYOUT
import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';
import {PageTitleComponent} from './Layout/Components/page-title/page-title.component';
// HEADER
import {HeaderComponent} from './Layout/Components/header/header.component';
import {UserBoxComponent} from './Layout/Components/header/elements/user-box/user-box.component';
// SIDEBAR
import {SidebarComponent} from './Layout/Components/sidebar/sidebar.component';
import {LogoComponent} from './Layout/Components/sidebar/elements/logo/logo.component';
// FOOTER
import {FooterComponent} from './Layout/Components/footer/footer.component';

// PAGES
// Inicio
import {HomeComponent} from './Pages/Inicio/home.component';
// Catalogo
import { TabelaCatalogoGridComponent } from './Pages/Catalogo/tabela-catalogo/tabela-catalogo-grid/tabela-catalogo-grid.component';
import { TabelaCatalogoMainComponent } from './Pages/Catalogo/tabela-catalogo/tabela-catalogo-main/tabela-catalogo-main.component';
import { CadastroCatalogoComponent } from './Pages/Catalogo/cadastro-catalogo/cadastro-catalogo.component';
// Empresa
import { TabelaEmpresaGridComponent } from './Pages/Empresa/consultar-empresa/tabela-empresa-grid/tabela-empresa-grid.component';
import { TabelaEmpresaMainComponent } from './Pages/Empresa/consultar-empresa/tabela-empresa-main/tabela-empresa-main.component';
import { CadastroEmpresaComponent } from './Pages/Empresa/cadastro-empresa/cadastro-empresa.component';
// Fornecedor
import { TabelaFornecedorGridComponent } from './Pages/Fornecedor/consultar-fornecedor/tabela-fornecedor-grid/tabela-fornecedor-grid.component';
import { TabelaFornecedorMainComponent } from './Pages/Fornecedor/consultar-fornecedor/tabela-fornecedor-main/tabela-fornecedor-main.component';
import { CadastroFornecedorComponent } from './Pages/Fornecedor/cadastro-fornecedor/cadastro-fornecedor.component';
// Produto
import { TabelaProdutoGridComponent } from './Pages/Produto/consultar-produto/tabela-produto-grid/tabela-produto-grid.component';
import { TabelaProdutoMainComponent } from './Pages/Produto/consultar-produto/tabela-produto-main/tabela-produto-main.component';
import { CadastroProdutoComponent } from './Pages/Produto/cadastro-produto/cadastro-produto.component';
// Usuario
import { TabelaUsuarioGridComponent } from './Pages/Usuario/consultar-usuario/tabela-usuario-grid/tabela-usuario-grid.component';
import { TabelaUsuarioMainComponent } from './Pages/Usuario/consultar-usuario/tabela-usuario-main/tabela-usuario-main.component';
import { CadastroUsuarioComponent } from './Pages/Usuario/cadastro-usuario/cadastro-usuario.component';
// Empresa
import { TabelaPedidoGridComponent } from './Pages/Vendas/consulta-pedido/tabela-pedido-grid/tabela-pedido-grid.component';
import { TabelaPedidoMainComponent } from './Pages/Vendas/consulta-pedido/tabela-pedido-main/tabela-pedido-main.component';
import { CadastroPedidoComponent } from './Pages/Vendas/cadastro-pedido/cadastro-pedido.component';
// Empresa
import { TabelaClienteGridComponent } from './Pages/Cliente/tabela-cliente/tabela-cliente-grid/tabela-cliente-grid.component';
import { TabelaClienteMainComponent } from './Pages/Cliente/tabela-cliente/tabela-cliente-main/tabela-cliente-main.component';
import { CadastroClienteComponent } from './Pages/Cliente/cadastro-cliente/cadastro-cliente.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    //layout
    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,
    //Header
    HeaderComponent,
    UserBoxComponent,
    //SideBar
    SidebarComponent,
    LogoComponent,
    FooterComponent,
    
    //Pages
      //Inicio
      HomeComponent,
      // Catalogo
      TabelaCatalogoGridComponent,
      TabelaCatalogoMainComponent,
      CadastroCatalogoComponent,
      // Catalogo
      TabelaClienteGridComponent,
      TabelaClienteMainComponent,
      CadastroClienteComponent,
      //Empresa
      TabelaEmpresaGridComponent,
      TabelaEmpresaMainComponent,
      CadastroEmpresaComponent,
      // Fornecedor
      TabelaFornecedorGridComponent,
      TabelaFornecedorMainComponent,
      CadastroFornecedorComponent,
      // Produto
      TabelaProdutoGridComponent,
      TabelaProdutoMainComponent,
      CadastroProdutoComponent,  
      // Usuario
      TabelaUsuarioGridComponent,
      TabelaUsuarioMainComponent,
      CadastroUsuarioComponent,
      // Pedido
      TabelaPedidoGridComponent,
      TabelaPedidoMainComponent, 
      CadastroPedidoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    CommonModule,
    LoadingBarRouterModule,

    // Angular Bootstrap Components
    PerfectScrollbarModule,
    NgbModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Charts
    ChartsModule,
  ],
  providers: [
    {
      provide:
      PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
      DEFAULT_PERFECT_SCROLLBAR_CONFIG,
      // DEFAULT_DROPZONE_CONFIG,
    },
    ConfigActions,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
              private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
