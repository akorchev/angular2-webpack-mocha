import { getTestBed, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { spy } from 'sinon';

for (var i = 0; i < 10; i++) {
  describe(`AppComponent ${i}`, () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent]
      });
    });

    it('should set h1 of document', () => {
      const fixture = TestBed.createComponent(AppComponent);

      const h1 = fixture.debugElement.query(By.css('h1'));

      expect(h1.nativeElement.textContent).toEqual('Testing framework showdown');
    });

    it('should display 0 as initial value', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).toEqual('Value: 0');
    });

    it('should increment the value', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.componentInstance.onIncrementClick();

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).toEqual('Value: 1');
    });

    it('should decrement the value', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.componentInstance.onDecrementClick();

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).toEqual('Value: -1');
    });

    it('value cannot be more than 100', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.componentInstance.value = 100;

      fixture.componentInstance.onIncrementClick();

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).toEqual('Value: 100');
    });

    it('value cannot be more less than -100', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.componentInstance.value = -100;

      fixture.componentInstance.onDecrementClick();

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).toEqual('Value: -100');
    });

    it('should invoke onIncrementClick when the user clicks the increment button', () => {
      const fixture = TestBed.createComponent(AppComponent);

      const onIncrementClick = spyOn(fixture.componentInstance, 'onIncrementClick');

      const button = fixture.debugElement.query(By.css('.increment'));

      button.triggerEventHandler('click', {});

      expect(onIncrementClick).toHaveBeenCalled();
    });

    it('should invoke onDecrementClick when the user clicks the decrement button', () => {
      const fixture = TestBed.createComponent(AppComponent);

      const onDecrementClick = spyOn(fixture.componentInstance, 'onDecrementClick');

      const button = fixture.debugElement.query(By.css('.decrement'));

      button.triggerEventHandler('click', {});

      expect(onDecrementClick).toHaveBeenCalled();
    });
  });
}
