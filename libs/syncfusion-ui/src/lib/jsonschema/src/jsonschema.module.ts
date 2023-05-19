import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyFieldObject } from "./object.type";
import { FormlyFieldArray } from "./array.type";
import { FormlyFieldNull } from "./null.type";
import { FormlyFieldMultiSchema } from "./multischema.type";
import { FormlyFieldVoid } from "./void.type";

@NgModule({
  declarations: [
    FormlyFieldObject,
    FormlyFieldArray,
    FormlyFieldNull,
    FormlyFieldMultiSchema,
    FormlyFieldVoid
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [
        { name: "null", component: FormlyFieldNull, wrappers: ["form-field"] },
        { name: "void", component: FormlyFieldVoid, wrappers: ["form-field"] },
        { name: "array", component: FormlyFieldArray },
        { name: "object", component: FormlyFieldObject },
        { name: "multischema", component: FormlyFieldMultiSchema }
      ]
    })]
})
export class FormlySyncfusionJSONSchemaModule {
}
