import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideZonelessChangeDetection } from '@angular/core';
import { App } from './app';

describe('App (zoneless)', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeAll(() => {
    // Create a type-safe fake matchMedia
    const fakeMatchMedia: typeof window.matchMedia = (query: string) => ({
      matches: query.includes('prefers-color-scheme: light') ? false : true,
      media: query,
      onchange: null,
      addListener: () => {}, // deprecated but some code may call it
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    });

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      configurable: true,
      value: fakeMatchMedia,
    });
  });



  beforeEach(async () => {
    // Ensure deterministic theme before the service initializes
    try { localStorage.removeItem('theme'); } catch { /* empty */ }
    document.body.classList.remove('theme-alternate');

    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection(), provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    // Extra safety to avoid leaking into the next spec
    try { localStorage.removeItem('theme'); } catch { /* empty */ }
    document.body.classList.remove('theme-alternate');
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('defaults to dark theme', () => {
    expect(component.currentTheme()).toBe('dark'); // ✅ read signal value
    expect(document.body.classList.contains('theme-alternate')).toBeFalse();
  });

  it('toggles to light on first click', () => {
    const btn = fixture.debugElement.query(By.css('.theme-toggle-button')).nativeElement;
    btn.click();
    fixture.detectChanges();

    expect(component.currentTheme()).toBe('light'); // ✅
    expect(document.body.classList.contains('theme-alternate')).toBeTrue();
  });

  it('toggles back to dark on second click', () => {
    const btn = fixture.debugElement.query(By.css('.theme-toggle-button')).nativeElement;

    btn.click(); // -> light
    fixture.detectChanges();
    expect(component.currentTheme()).toBe('light');
    expect(document.body.classList.contains('theme-alternate')).toBeTrue();

    btn.click(); // -> dark
    fixture.detectChanges();
    expect(component.currentTheme()).toBe('dark');
    expect(document.body.classList.contains('theme-alternate')).toBeFalse();
  });
});
