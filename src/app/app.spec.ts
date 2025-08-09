import {ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {App} from './app';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should default to the dark theme', fakeAsync(() => {
    expect(component.currentTheme() === 'dark').toBeTrue();
    expect(component.currentTheme() === 'light').toBeFalse();
  }));

  it('should switch the theme to light when you click the theme toggle button once', fakeAsync(() => {
    spyOn(component, 'switchTheme');
    const button = fixture.debugElement.query(By.css('.theme-toggle-button')).nativeElement;
    button.click();
    tick();
    expect(component.switchTheme).toHaveBeenCalled();
  }));

  it('should switch the theme to light when you click the theme toggle button twice', fakeAsync(() => {
    spyOn(component, 'switchTheme');
    const button = fixture.debugElement.query(By.css('.theme-toggle-button')).nativeElement;
    button.click();
    tick();
    if (component.currentTheme() === 'dark') {
      expect(component.currentTheme() === 'dark').toBeFalse();
      expect(component.currentTheme() === 'light').toBeTrue();
    } else {
      expect(component.currentTheme() === 'dark').toBeTrue();
      expect(component.currentTheme() === 'light').toBeFalse();
    }

    button.click();
    tick();
    expect(component.switchTheme).toHaveBeenCalledTimes(2);
  }));
});
