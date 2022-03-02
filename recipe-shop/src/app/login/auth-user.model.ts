export class AuthUser {
  public token: string;
  public exp: number;
  public expirationDate: Date;
  constructor(token: string, exp: number, expDate: Date) {
    this.token = token;
    this.exp = exp;
    this.expirationDate = expDate;
  }
  get expiration() {
    if (!this.expirationDate || new Date() > this.expirationDate) {
      return null;
    } else {
      return this.token;
    }
  }
}
