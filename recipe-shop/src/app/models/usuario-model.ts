export class Usuario {
  public nome: string;
  public password: string;
  public email: string;
  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}
