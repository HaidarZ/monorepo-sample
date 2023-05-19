import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";


@Component({
  selector: "meplus-formly-json-schema",
  templateUrl: "./formly-json-schema.component.html",
  styleUrls: ["./formly-json-schema.component.css"]
})
export class FormlyJsonSchemaComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "md:grid md:grid-cols-3 md:gap-4",
      fieldGroup: [
        {
          key: "email",
          type: "input",
          props: {
            label: "Email address",
            placeholder: "Enter email",
            required: true
          }
        },
        {
          "key": "maritalStatus",
          "type": "select",
          "props": {
            "label": "Marital Status",
            placeholder: "Select marital status",
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
      ]
    },
    {
      "key": "sex",
      "type": "radio",
      "props": {
        "label": "Sex",
        "options": [
          {
            "label": "Male",
            "value": "male"
          },
          {
            "label": "Female",
            "value": "female"
          },
          {
            "label": "Intersex",
            "value": "intersex"
          }
        ],
        "required": true
      }
    },
    {
      key: "remark",
      type: "textarea",
      className: "col-12",
      props: {
        label: "Remark",
        rows: 3
      }
    },
    {
      key: "acceptTerms",
      type: "checkbox",
      props: {
        label: "Accept terms",
        description: "In order to proceed, please accept terms",
        pattern: "true",
        required: true
      },
      validation: {
        messages: {
          pattern: "Please accept the terms"
        }
      }
    },
    {
      key: "Datepicker",
      type: "datepicker",
      props: {
        label: "Datepicker",
        placeholder: "Placeholder",
        description: "Description",
        required: true
      }
    }
  ];
  tree = this.buildElementsTree(this.fields);

  buildElementsTree(fields: FormlyFieldConfig[]): any[] {
    // iterate through fields and build tree having the following structure:
    // public hierarchicalData: Object[] = [
    //     { id: '01', name: 'Music', expanded: true,
    //       subChild: [
    //         {id: '01-01', name: 'Gouttes.mp3'},
    //       ]
    //     },
    //     {
    //       id: '02', name: 'Videos',
    //       subChild: [
    //         {id: '02-01', name: 'Naturals.mp4'},
    //         {id: '02-02', name: 'Wild.mpeg'}
    //       ]
    //     },
    //     {
    //       id: '03', name: 'Documents',
    //       subChild: [
    //         {id: '03-01', name: 'Environment Pollution.docx'},
    //         {id: '03-02', name: 'Global Water, Sanitation, & Hygiene.docx'},
    //         {id: '03-03', name: 'Global Warming.ppt'},
    //         {id: '03-02', name: 'Social Network.pdf'},
    //         {id: '03-03', name: 'Youth Empowerment.pdf'},
    //       ]
    //     }
    //   ]
    const tree: any[] = [];
    fields.forEach(field => {
      const node: any = {
        id: field.key,
        name: field.props?.label,
        expanded: true,
        subChild: []
      };
      if (field.fieldGroup) {
        node.subChild = this.buildElementsTree(field.fieldGroup);
      }
      tree.push(node);
    });
    console.log(tree);
    return tree;
  }

  onSubmit(model: any) {
    console.log(model);
  }
}
