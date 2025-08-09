// src/app/theme.service.ts
import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

const THEME_KEY = 'theme';               // 'light' | 'dark'
const LIGHT_CLASS = 'theme-alternate';   // your styles.scss uses this on <body>

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isBrowser = false;
  current = signal<'light' | 'dark'>('dark');

  private doc = inject(DOCUMENT);
  private platformId: object = inject(PLATFORM_ID);

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    const initial = this.readInitialPreference();
    this.apply(initial);
  }

  toggle() {
    this.apply(this.current() === 'light' ? 'dark' : 'light');
  }

  apply(theme: 'light' | 'dark') {
    this.current.set(theme);
    if (!this.isBrowser) return;
    const body = this.doc?.body;
    if (!body) return;
    if (theme === 'light') body.classList.add(LIGHT_CLASS);
    else body.classList.remove(LIGHT_CLASS);
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* empty */ }
  }

  private readInitialPreference(): 'light' | 'dark' {
    if (!this.isBrowser) return 'dark';
    try {
      const stored = localStorage.getItem(THEME_KEY) as 'light' | 'dark' | null;
      if (stored) return stored;
      return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    } catch { return 'dark'; }
  }
}
