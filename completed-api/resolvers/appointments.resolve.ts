import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentsInput } from "../dto/inputs/create-appointments.input";
import { AppointmentModel } from "../dto/models/appointment.model";

const appointments: AppointmentModel[] = []

@Resolver(() => AppointmentModel)
export class AppointmentsResolver {
  @Query(() => [AppointmentModel!]!)
  getAppointment() {
    return appointments
  }

  @Mutation(() => AppointmentModel)
  createAppointment(@Arg('data') data: CreateAppointmentsInput): AppointmentModel {
    console.log('🔴 ===> data', data);
    const appointment: AppointmentModel = { ...data }
    appointments.push(appointment)
    return appointment
  }
}
