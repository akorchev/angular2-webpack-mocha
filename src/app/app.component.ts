import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: require('./app.component.html')
})
export class AppComponent {
  value = 0;

  onIncrementClick() {
    this.value = Math.min(100, ++this.value);
  }

  onDecrementClick() {
    this.value = Math.max(-100, --this.value);
  }
}
