import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideZonelessChangeDetection } from '@angular/core';
// If you use <mat-icon>, this keeps tests fast:
import { MatIconTestingModule } from '@angular/material/icon/testing';

describe('HomepageComponent', () => {
  let fixture: ComponentFixture<HomepageComponent>;
  let component: HomepageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomepageComponent,
        MatIconTestingModule, // only if template uses <mat-icon>
      ],
      providers: [
        provideNoopAnimations(),              // keep Material quiet in tests
        provideRouter([]),                  // uncomment if it uses RouterOutlet/routerLink
        provideZonelessChangeDetection() // uncomment if you want zoneless tests
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
