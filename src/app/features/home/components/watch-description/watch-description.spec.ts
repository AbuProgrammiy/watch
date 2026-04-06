import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDescription } from './watch-description';

describe('WatchDescription', () => {
  let component: WatchDescription;
  let fixture: ComponentFixture<WatchDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
