import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class AppointmentModel {
  @Field()
  startAt: Date;

  @Field()
  endAt: Date;

  @Field()
  txt: string;
}