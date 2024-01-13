import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisPanelComponent } from './tetris-panel.component';

describe('TetrisPanelComponent', () => {
  let component: TetrisPanelComponent;
  let fixture: ComponentFixture<TetrisPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetrisPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TetrisPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
