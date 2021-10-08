export class OperatorUser {
  constructor(
    public email: string,
    public id: number,
    private _token: string,
    public role: string,
    public tokenExpirationDate: Date,
    public uniqueOperatorId: string,
    public company: string
  ) {}

  get token() {
    if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate) {
      return null;
    }

    return this._token;
  }
}
