import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";

export interface Column {
  id: string;
  sortBy?: string;
  name: string;
  isSortDisabled?: boolean;
}

export type Columns = Column[];

export type Row = any;

export type Rows = Row[];

export interface Sort {
  sortBy: string;
  direction: "asc" | "desc";
}

export interface Pagination {
  currentPage: number;
  rowsPerPage: number;
}

@Component({
  selector: "ui-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() columns: Columns = [];
  @Input() rows: Rows = [];
  @Input() filter: string = "";
  @Input() sort: Sort = null;
  @Input() pagination: Pagination = { currentPage: 1, rowsPerPage: 10 };
  @Input() length: number = 1;

  @Output() filterChanged: EventEmitter<string> = new EventEmitter();
  @Output() sortChanged: EventEmitter<Sort> = new EventEmitter();
  @Output() paginationChanged: EventEmitter<Pagination> = new EventEmitter();

  formSelect = 10;
  formInput = "";

  constructor(private router: Router) {}

  ngOnInit() {}

  isBoolean(value: any) {
    return typeof value === "boolean";
  }

  getRowKeys(row: Row) {
    return Object.keys(row);
  }

  getFlagForIcon(id: string, icon: string) {
    if (!this.sort) {
      return false;
    }

    switch (icon) {
      case "top": {
        if (this.sort.sortBy !== id) {
          return true;
        }

        return this.sort.direction !== "asc";
      }

      case "bottom": {
        if (this.sort.sortBy !== id) {
          return true;
        }

        return this.sort.direction !== "desc";
      }

      case "top-active": {
        if (this.sort.sortBy === id) {
          return this.sort.direction === "asc";
        }

        return false;
      }

      case "bottom-active": {
        if (this.sort.sortBy === id) {
          return this.sort.direction === "desc";
        }

        return false;
      }

      default: {
        return false;
      }
    }
  }

  onSortChanged(id: string) {
    const direction =
      this.sort.sortBy === id && this.sort.direction === "asc" ? "desc" : "asc";

    this.sortChanged.emit({ sortBy: id, direction });
  }

  onSubmit() {}

  onClick(name: string) {
    this.router.navigateByUrl(`/instances/${name}`);
  }

  getMin(...args) {
    return Math.min(...args);
  }

  get pages() {
    return Array.from({ length: Math.ceil(this.length / 10) }).map(
      (page, i) => i + 1
    );
  }
}
