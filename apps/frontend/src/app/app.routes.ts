import { Route } from "@angular/router";
import { FormBuilderSampleComponent } from "./form-builder-sample/form-builder-sample.component";
import { FormlyJsonSchemaComponent } from "./formly-json-schema/formly-json-schema.component";

export const appRoutes: Route[] = [
  {
    path: "form-builder-sample",
    component: FormBuilderSampleComponent
  },
  {
    path: "formly-json-schema",
    component: FormlyJsonSchemaComponent
  },
  {
    path: "",
    redirectTo: "form-designer",
    pathMatch: "full"
  }
];
