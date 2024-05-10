import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActionHistoryComponent } from './user-action-history.component';

describe('UserActionHistoryComponent', () => {
  let component: UserActionHistoryComponent;
  let fixture: ComponentFixture<UserActionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserActionHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserActionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
