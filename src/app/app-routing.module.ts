import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';


const routes: Routes = [
	{ path: '', redirectTo: '/acceuil', pathMatch: 'full' },
    { path: 'propos/:name', component: ProductDetailsComponent },
    { path: 'propos', component: ProductDetailsComponent },
    { path: 'acceuil', component: TestComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductDetailsComponent, TestComponent, ContactComponent]


