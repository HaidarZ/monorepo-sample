import { Component } from "@angular/core";
import { FieldType } from "../../form-field";


@Component({
  selector: "meplus-formly-void-type",
  template: `
    <div class="mb-3">
      <div class="alert alert-danger" role="alert" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    </div>
  `
})
export class FormlyFieldVoid extends FieldType {
}
