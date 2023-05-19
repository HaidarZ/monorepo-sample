import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormlySyncfusionFormFieldModule } from "./form-field";
import { FormlySyncfusionInputModule } from "./input";
import { FormlySyncfusionSelectModule } from "./select";
import { FormlySyncfusionRadioModule } from "./radio";
import { FormlySyncfusionTextAreaModule } from "./textarea";
import { FormlySyncfusionCheckboxModule } from "./checkbox";
import { FormlySyncfusionDatepickerModule } from "./datepicker/src/datepicker.module";
import { FormlySyncfusionJSONSchemaModule } from "./jsonschema";

@NgModule({
  imports: [
    CommonModule,
    FormlySyncfusionFormFieldModule,
    FormlySyncfusionInputModule,
    FormlySyncfusionSelectModule,
    FormlySyncfusionRadioModule,
    FormlySyncfusionTextAreaModule,
    FormlySyncfusionCheckboxModule,
    FormlySyncfusionDatepickerModule,
    FormlySyncfusionJSONSchemaModule
  ]
})
export class FormlySyncfusionUiModule {
}
