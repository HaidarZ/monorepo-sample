import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormDesignerComponent } from "./components/form-designer/form-designer.component";
import { FieldTypeListComponent } from "./components/field-type-list/field-type-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TabModule } from "@syncfusion/ej2-angular-navigations";
import { FormDesignerService } from "./components/form-designer.service";
import { FormDesignAreaComponent } from "./components/form-design-area/form-design-area.component";
import { FormFieldComponent } from "./components/form-field/form-field.component";
import { FormFieldSettingsComponent } from "./components/form-field-settings/form-field-settings.component";
import { FormlyModule } from "@ngx-formly/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    TabModule,
    FormlyModule.forRoot({
      extras: {
        renderFormlyFieldElement: false
      }
    })
  ],
  exports: [FormDesignerComponent],
  declarations: [
    FormDesignerComponent,
    FieldTypeListComponent,
    FormDesignAreaComponent,
    FormFieldComponent,
    FormFieldSettingsComponent
  ],
  providers: [
    FormDesignerService
  ]
})
export class FormDesignerModule {
}
