import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { NavbarComponent } from './components/public/shared/navbar/navbar.component';
import { FooterComponent } from './components/public/shared/footer/footer.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { TopbarComponent } from './components/private/shared/topbar/topbar.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { CategoriesListComponent } from './components/private/admin/category/categories-list/categories-list.component';
import { CategoryAddComponent } from './components/private/admin/category/category-add/category-add.component';
import { CategoryUpdateComponent } from './components/private/admin/category/category-update/category-update.component';
import { ProductListComponent } from './components/private/admin/product/product-list/product-list.component';
import { ProductAddComponent } from './components/private/admin/product/product-add/product-add.component';
import { ProductUpdateComponent } from './components/private/admin/product/product-update/product-update.component';

import { OrdersDetailsComponent } from './components/private/admin/order/orders-details/orders-details.component';
import { OrdersListComponent } from './components/private/admin/order/orders-list/orders-list.component';
import { ClientListComponent } from './components/private/admin/client/client-list/client-list.component';
import { MyOrderListComponent } from './components/private/client/order/my-order-list/my-order-list.component';
import { MyOrderDetailsComponent } from './components/private/client/order/my-order-details/my-order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    CategoriesListComponent,
    CategoryAddComponent,
    CategoryUpdateComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductUpdateComponent,

    OrdersDetailsComponent,
     OrdersListComponent,
     ClientListComponent,
     MyOrderListComponent,
     MyOrderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
