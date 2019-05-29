import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NewProblemsComponent } from "./new-problems.component";

describe("NewProblemsComponent", () => {
  let component: NewProblemsComponent;
  let fixture: ComponentFixture<NewProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewProblemsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
