import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AverageUptimeComponent } from "./average-uptime.component";

describe("AverageUptimeComponent", () => {
  let component: AverageUptimeComponent;
  let fixture: ComponentFixture<AverageUptimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AverageUptimeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageUptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
