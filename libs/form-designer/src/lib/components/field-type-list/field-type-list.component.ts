import { Component } from "@angular/core";
import { CdkDragEnter, CdkDragExit } from "@angular/cdk/drag-drop";

import remove from "lodash-es/remove";
import { FormDesignerService } from "../form-designer.service";

@Component({
  selector: "meplus-field-type-list",
  templateUrl: "./field-type-list.component.html",
  styleUrls: ["./field-type-list.component.css"]
})
export class FieldTypeListComponent {
  fieldTypes: any[];

  constructor(formDesignerService: FormDesignerService) {
    this.fieldTypes = formDesignerService.fieldTypes;
  }

  noReturnPredicate() {
    return false;
  }

  // fixme: implementation below is a workaround for a missing feauture in cdk/drag-drop library
  // the requested feature is to allow copying items from a source list to a target list
  // without removing the item from the source list

  onSourceListExited(event: CdkDragExit<any>) {
    this.fieldTypes.splice(
      this.fieldTypes.indexOf(event.item.data) + 1,
      0,
      { ...event.item.data, temp: true }
    );
  }

  onSourceListEntered(event: CdkDragEnter<any>) {
    remove(this.fieldTypes, (i: any) => {
      return i.temp;
    });
  }
}
