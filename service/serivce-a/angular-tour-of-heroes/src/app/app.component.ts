import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  // Unused variable (should be detected)
  _unusedVar = 42;

  sum(a: number, b: number) {
    return a + b
  }

  // Potential bug: Weak equality check
  checkValue() {
    if ("123" == 123) { // Weak comparison
      console.log("Values are equal")
    }
  }
}
