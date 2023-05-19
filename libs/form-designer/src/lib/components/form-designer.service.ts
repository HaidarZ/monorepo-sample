import { Injectable } from "@angular/core";
import { ReplaySubject, Subject } from "rxjs";
import { FIELD_TYPES } from "../fields";
import remove from "lodash-es/remove";

@Injectable({
  providedIn: "root"
})
export class FormDesignerService {

  public formFieldSelected$: Subject<any> = new Subject();
  public formFieldAdded$: ReplaySubject<any> = new ReplaySubject();
  public formFieldRemoved$: ReplaySubject<any> = new ReplaySubject();

  public fieldTypes: any[] = FIELD_TYPES;

  constructor() {
    this.formFieldAdded$.subscribe((formField: any) => {
      this.onFormFieldAdded(formField);
    });
    this.formFieldRemoved$.subscribe((formField: any) => {
      this.onFormFieldRemoved(formField);
    });
  }

  onFormFieldAdded(formField: any): void {
    remove(this.fieldTypes, (i: any) => {
      return i.temp;
    });
  }

  onFormFieldRemoved(formField: any): void {
//
  }

  selectField(field: any) {
    this.formFieldSelected$.next(field);
  }
}
