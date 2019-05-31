import { Component, OnInit } from "@angular/core";
import { RouterState, RouterStore } from "@datorama/akita-ng-router-store";

interface Breadcrumb {
  link: string;
  name: string;
}

type Breadcrumbs = Breadcrumb[];

@Component({
  selector: "observer-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  breadcrumbs: Breadcrumbs = [];
  isAuthenticated = false;

  constructor(private routerStore: RouterStore) {
    this.routerStore
      ._select((state: RouterState) => state)
      .subscribe(({ state }: RouterState) => {
        if (state) {
          const [, ...breadcrumbs] = state.url.split("/");

          let currentBreadcrumb = "";

          this.breadcrumbs = breadcrumbs.map((breadcrumb, index) => {
            currentBreadcrumb += `/${breadcrumb}`;

            return {
              link: currentBreadcrumb,
              name: breadcrumb
            };
          });
        }
      });
  }

  ngOnInit() {}

  onAuth() {
    alert("Invalid email or password");
  }
}
