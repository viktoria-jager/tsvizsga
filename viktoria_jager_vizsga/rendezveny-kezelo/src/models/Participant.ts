export interface IParticipant {
  id: number;
  name: string;
  email: string;
}

export class Participant implements IParticipant {
  constructor(
    public id: number,
    public name: string,
    public email: string
  ) {}
}
