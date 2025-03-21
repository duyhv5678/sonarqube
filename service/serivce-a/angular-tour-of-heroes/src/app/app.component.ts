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

  // 🚨 Hardcoded credentials (should trigger a security warning)
  private apiKey = "12345-SECRET-KEY"; 

  // 🚨 Weak hashing algorithm usage
  hashPassword(password: string) {
    const crypto = require("crypto"); 
    return crypto.createHash("md5").update(password).digest("hex"); // MD5 is insecure
  }

  // 🚨 XSS vulnerability (insecure direct DOM manipulation)
  displayUserInput(input: string) {
    document.body.innerHTML = "<h1>" + input + "</h1>"; // Direct DOM insertion, vulnerable to XSS
  }

  // 🚨 SQL Injection vulnerability (unsafe query string concatenation)
  getUserData(userId: string) {
    const query = `SELECT * FROM users WHERE id = '${userId}'`; // Unsafe query string
    console.log(query);
  }

  // 🚨 Insecure JWT handling (exposing secret key)
  generateJWT(payload: object) {
    const jwt = require("jsonwebtoken");
    return jwt.sign(payload, "my-secret-key", { algorithm: "HS256" }); // Hardcoded secret key
  }
}
