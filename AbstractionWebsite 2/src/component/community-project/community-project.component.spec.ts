import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityProjectComponent } from './community-project.component';

describe('CommunityProjectComponent', () => {
  let component: CommunityProjectComponent;
  let fixture: ComponentFixture<CommunityProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
