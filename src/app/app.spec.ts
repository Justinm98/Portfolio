import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideZonelessChangeDetection } from '@angular/core';
import { App } from './app';

describe('App (zoneless)', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App], // standalone root
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('defaults to dark theme', () => {
    expect(component.currentTheme.toString()).toBe('[Signal: dark]');
    expect(document.body.classList.contains('theme-alternate')).toBeFalse();
  });

  it('toggles to light on first click', () => {
    const btn = fixture.debugElement.query(By.css('.theme-toggle-button')).nativeElement;
    btn.click();
    fixture.detectChanges();

    expect(component.currentTheme.toString()).toBe('[Signal: light]');
    expect(document.body.classList.contains('theme-alternate')).toBeTrue();
  });

  it('toggles back to dark on second click', () => {
    const btn = fixture.debugElement.query(By.css('.theme-toggle-button')).nativeElement;
    btn.click(); // -> light
    fixture.detectChanges();
    btn.click(); // -> dark
    fixture.detectChanges();

    expect(component.currentTheme.toString()).toBe('[Signal: dark]');
    expect(document.body.classList.contains('theme-alternate')).toBeFalse();
  });
});
