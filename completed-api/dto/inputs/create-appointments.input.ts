import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentsInput {
  @Field()
  txt: string;

  @Field()
  startAt: Date;

  @Field()
  endAt: Date;
}