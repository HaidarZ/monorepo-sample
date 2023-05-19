import { computed, Signal, signal } from "@angular/core";

export abstract class FieldTypeBase<T> {
  config: any = {};

  id: Signal<string | undefined>;
  key: Signal<string>;
  type: string;
  value: T | undefined;
  defaultValue: T | undefined;
  label: Signal<string>;
  placeholder: Signal<string | undefined>;
  description: Signal<string | undefined>;
  required: Signal<boolean>;
  controlType: string;
  props: Signal<any>;


  constructor(options: {
    id?: string;
    key?: string;
    type?: string;
    value?: T;
    defaultValue?: T;
    label?: string;
    placeholder?: string;
    description?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    options?: { key: string, value: string }[];
    props?: any;
  } = {}) {
    this.config = options;
    this.id = signal(options.id);
    this.key = signal(options.key || "");
    this.type = options.type || "";
    this.value = options.value;
    this.defaultValue = options.defaultValue;
    this.label = signal(options.label || "");
    this.placeholder = signal(options.placeholder || "");
    this.description = signal(options.description || "");
    this.required = signal(!!options.required);
    this.controlType = options.controlType || "";
    this.props = signal(options.props || {});
  }

  rendererConfig = computed(() => {
    return {
      id: this.id(),
      key: this.key(),
      type: this.type,
      props: {
        label: this.label(),
        description: this.description(),
        placeholder: this.placeholder(),
        required: this.required(),
        ...this.props()
      }
    };
  });

  getSettingsRendererConfig(): any[] {
    return [
      {
        "key": "key",
        "type": "input",
        "props": {
          "label": "Key"
        }
      },
      {
        "key": "props",
        fieldGroup: [
          {
            "key": "label",
            "type": "input",
            "props": {
              "label": "Label"
            }
          },
          {
            "key": "placeholder",
            "type": "input",
            "props": {
              "label": "Placeholder"
            }
          },
          {
            "key": "required",
            "type": "checkbox",
            "props": {
              "label": "Required"
            }
          }
        ]
      }
    ];
  }

  applySettingsRendererConfig(config: any) {
    console.log("applySettingsRendererConfig", config);
    this.key = config.key;
    this.label = config.props.label;
    this.placeholder = config.props.placeholder;
    this.required = config.props.required;
    this.props = { ...config.props };
  }

  toJson(): any {
    return {
      id: this.id,
      key: this.key,
      type: this.type,
      value: this.value,
      defaultValue: this.defaultValue,
      label: this.label,
      placeholder: this.placeholder,
      description: this.description,
      required: this.required,
      controlType: this.controlType,
      props: this.props
    };
  }

  clone(): FieldTypeBase<T> {
    // Create a new instance of the same class with the same config
    return new (this.constructor as any)(this.config);
  }
}
