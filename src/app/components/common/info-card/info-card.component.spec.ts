import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoCardComponent } from './info-card.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatIconTestingModule } from '@angular/material/icon/testing'; // avoids HttpClient/icon registry issues
import { provideRouter } from '@angular/router';                         // if the template uses routerLink
import { provideZonelessChangeDetection } from '@angular/core';

describe('InfoCardComponent', () => {
  let fixture: ComponentFixture<InfoCardComponent>;
  let component: InfoCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        InfoCardComponent,
        MatIconTestingModule,   // only needed if template uses <mat-icon>
      ],
      providers: [
        provideNoopAnimations(),              // keep Material quiet in tests
        provideRouter([]),                  // uncomment if it uses RouterOutlet/routerLink
        provideZonelessChangeDetection() // uncomment if you want zoneless tests
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
