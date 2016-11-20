import { getTestBed, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { expect } from 'chai';
import { spy } from 'sinon';

for (var i = 0; i < 10; i++) {
  describe(`AppComponent ${i}`, () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent]
      });
    });

    afterEach(() => {
      getTestBed().resetTestingModule();
    });

    it('should display 0 as initial value', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).to.equal('Value: 0');
    });

    it('should increment the value', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.componentInstance.onIncrementClick();

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).to.equal('Value: 1');
    });

    it('should decrement the value', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.componentInstance.onDecrementClick();

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).to.equal('Value: -1');
    });

    it('value cannot be more than 100', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.componentInstance.value = 100;

      fixture.componentInstance.onIncrementClick();

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).to.equal('Value: 100');
    });

    it('value cannot be more less than -100', () => {
      const fixture = TestBed.createComponent(AppComponent);

      fixture.componentInstance.value = -100;

      fixture.componentInstance.onDecrementClick();

      fixture.detectChanges();

      const h2 = fixture.debugElement.query(By.css('h2'));

      expect(h2.nativeElement.textContent).to.equal('Value: -100');
    });

    it('should invoke onIncrementClick when the user clicks the increment button', () => {
      const fixture = TestBed.createComponent(AppComponent);

      const onIncrementClick = spy(fixture.componentInstance, 'onIncrementClick');

      const button = fixture.debugElement.query(By.css('.increment'));

      button.triggerEventHandler('click', {});

      expect(onIncrementClick.called).to.equal(true);
    });

    it('should invoke onDecrementClick when the user clicks the decrement button', () => {
      const fixture = TestBed.createComponent(AppComponent);

      const onDecrementClick = spy(fixture.componentInstance, 'onDecrementClick');

      const button = fixture.debugElement.query(By.css('.decrement'));

      button.triggerEventHandler('click', {});

      expect(onDecrementClick.called).to.equal(true);
    });
  });
}
