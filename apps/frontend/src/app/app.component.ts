import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'meplus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      "key": "maritalStatus",
      "type": "select",
      "props": {
        "label": "Marital Status",
        placeholder: 'Select marital status',
        "options": [
          {
            "label": "Single",
            "value": "single"
          },
          {
            "label": "Married",
            "value": "married"
          },
          {
            "label": "Divorced",
            "value": "divorced"
          },
          {
            "label": "Separated",
            "value": "separated"
          }
        ],
        "required": true
      }
    },
    {
      "key": "reasonForComing",
      "type": "select",
      "props": {
        "label": "Reason for coming",
        "options": [
          {
            "label": "Salvia",
            "value": "salvia"
          },
          {
            "label": "Benzodia",
            "value": "benzodia"
          },
          {
            "label": "Ecstasy",
            "value": "ecstasy"
          },
          {
            "label": "Tramal",
            "value": "tramal"
          },
          {
            "label": "GHB",
            "value": "ghb"
          },
          {
            "label": "Heroine",
            "value": "heroine"
          },
          {
            "label": "Media",
            "value": "media"
          },
          {
            "label": "Cannabis",
            "value": "cannabis"
          },
          {
            "label": "Sex",
            "value": "sex"
          },
          {
            "label": "Gambling",
            "value": "gambling"
          },
          {
            "label": "Alcohol",
            "value": "alcohol"
          },
          {
            "label": "Cocaine",
            "value": "cocaine"
          },
          {
            "label": "Amphetamine",
            "value": "amphetamine"
          },
          {
            "label": "Other",
            "value": "other"
          }
        ],
        "multiple": true,
        "required": true
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
