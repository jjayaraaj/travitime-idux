export interface OperatorModel {
  id: number;
  email: string;
  name?: string;
  token: string;
  expiresIn?: number;
  role: string;
}
