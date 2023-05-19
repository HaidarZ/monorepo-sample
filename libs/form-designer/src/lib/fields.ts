import { TextField } from "./field-types/TextField";
import { NumberField } from "./field-types/NumberField";
import { DateField } from "./field-types/DateField";
import { SelectField } from "./field-types/SelectField";
import { CheckboxField } from "./field-types/CheckboxField";
import { RadioField } from "./field-types/RadioField";
import { TextAreaField } from "./field-types/TextAreaField";

export const FIELD_TYPES = [
  {
    label: "Text",
    field: new TextField({
      label: "Text field",
      placeholder: "Placeholder"
    })
  },
  {
    label: "Textarea",
    field: new TextAreaField({
      label: "Textarea field",
      placeholder: "Placeholder"
    })
  },
  {
    label: "Number",
    field: new NumberField({
      label: "Number field",
      placeholder: "Placeholder"
    })
  },
  {
    label: "Date",
    field: new DateField({
      label: "Date field",
      placeholder: "Placeholder"
    })
  },
  {
    label: "Select",
    field: new SelectField({
      label: "Select",
      placeholder: "Placeholder",
      options: [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" }
      ]
    })
  },
  {
    label: "Checkbox",
    field: new CheckboxField({
      label: "Checkbox field",
      placeholder: "Placeholder"
    })
  },
  {
    label: "Radio",
    field: new RadioField({
      label: "Radio field",
      placeholder: "Placeholder",
      options: [
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" }
      ]
    })
  }
];
