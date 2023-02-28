import {
  Arg,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import { Pet } from "../../../pets/database/entities/Pet";
import { User } from "../../../users/database/entities/User";

@InputType()
export class CreatePet {
  @Field()
  name: string;
  
  @Field()
  userId: string;
}

@Resolver(Pet)
export class PetsResolver {
  @Query(() => [Pet])
  async getPets(): Promise<Pet[]> {
    return Pet.find();
  }

  @Mutation(() => Pet)
  async createPet(
    @Arg("data") data: CreatePet,
  ): Promise<Pet> {
    const pet = Object.assign(new Pet(), { ...data });
    await pet.save();
    return pet;
  }

  @FieldResolver(() => User)
  async user(@Root() root: Pet) {
    return User.findOne({
      where: {
        id: root.userId,
      },
    });
  }
}
