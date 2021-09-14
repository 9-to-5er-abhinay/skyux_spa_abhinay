import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SkyAppTestModule } from '@skyux-sdk/builder/runtime/testing/browser';
import { expect } from '@skyux-sdk/testing';
// Component we're going to test
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('renders items component', () => {
    const items = fixture.debugElement.query(By.css('app-items'));
    expect(items).toBeTruthy();
  });
});
