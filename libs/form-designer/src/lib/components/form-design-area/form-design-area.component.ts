import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { BehaviorSubject } from "rxjs";
import { FormDesignerService } from "../form-designer.service";

@Component({
  selector: "meplus-form-design-area",
  templateUrl: "./form-design-area.component.html",
  styleUrls: ["./form-design-area.component.css"]
})
export class FormDesignAreaComponent {

  formFields: any[] = [];

  activeFormField$: BehaviorSubject<any> = new BehaviorSubject(null);

  counter = 0;

  constructor(private formDesigner: FormDesignerService) {
  }

  onFieldDropped(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      // case changing the order
      moveItemInArray(this.formFields, event.previousIndex, event.currentIndex);
    } else {
      this.formDesigner.formFieldAdded$.next(event);
      // dropping new item
      const field = event.item.data.field.clone();
      // insert at specific index where the item is dropped
      const insertIndex = event.currentIndex;
      this.formFields.splice(insertIndex, 0, field);
    }
  }
}
