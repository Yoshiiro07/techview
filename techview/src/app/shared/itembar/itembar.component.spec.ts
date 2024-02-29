import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembarComponent } from './itembar.component';

describe('ItembarComponent', () => {
  let component: ItembarComponent;
  let fixture: ComponentFixture<ItembarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItembarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItembarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
