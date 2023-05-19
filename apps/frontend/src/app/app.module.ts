import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlySyncfusionUiModule } from "@meplus/syncfusion-ui";
import { TreeViewModule } from "@syncfusion/ej2-angular-navigations";
import { FormBuilderSampleComponent } from "./form-builder-sample/form-builder-sample.component";
import { HeaderNavItemComponent } from "./components/header-nav-item/header-nav-item.component";
import { FormlyJsonSchemaComponent } from "./formly-json-schema/formly-json-schema.component";
import { FormDesignerModule } from "@meplus/form-designer";

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavItemComponent,
    FormBuilderSampleComponent,
    FormlyJsonSchemaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: "enabledBlocking" }),
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlySyncfusionUiModule,
    TreeViewModule,
    FormDesignerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
