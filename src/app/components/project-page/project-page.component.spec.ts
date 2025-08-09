import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPageComponent } from './project-page.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ProjectPageComponent', () => {
  let fixture: ComponentFixture<ProjectPageComponent>;
  let component: ProjectPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPageComponent],        // standalone component goes in imports
      providers: [
        provideNoopAnimations(),              // keep Material quiet in tests
        provideRouter([]),                  // uncomment if it uses RouterOutlet/routerLink
        provideZonelessChangeDetection() // uncomment if you want zoneless tests
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
