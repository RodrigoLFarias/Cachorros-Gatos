export class Cachorro {
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
  }

  public latir(): void {
      console.log(`${this.nome} está latindo!`);
  }

  public getNome(): string {
      return this.nome;
  }

  public setNome(nome: string): void {
      this.nome = nome;
  }

  public getIdade(): number {
      return this.idade;
  }

  public setIdade(idade: number): void {
      this.idade = idade;
  }
}
