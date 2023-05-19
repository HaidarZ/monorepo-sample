import { Component, Input } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "meplus-header-nav-item",
  templateUrl: "./header-nav-item.component.html",
  styleUrls: ["./header-nav-item.component.css"]
})
export class HeaderNavItemComponent {
  @Input() title!: string;
  @Input() link!: string;
}
