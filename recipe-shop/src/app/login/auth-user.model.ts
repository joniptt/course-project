export class AuthUser {
  public token: string;
  public decoded: { id: number; sub: string; iat: string; exp: string };
  public expirationDate: Date;
  constructor(
    token: string,
    decoded: { id: number; sub: string; iat: string; exp: string },
    expDate: Date
  ) {
    this.token = token;
    this.decoded = decoded;

    this.expirationDate = expDate;
  }
  get exp() {
    if (!this.expirationDate || new Date() > this.expirationDate) {
      return null;
    } else {
      return this.token;
    }
  }
}
