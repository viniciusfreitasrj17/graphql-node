import {
  Arg,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root,
  InputType,
  Field,
} from "type-graphql";
import { Pet } from "../../../pets/database/entities/Pet";
import { User } from "../../database/entities/User";

@InputType()
export class Create {
  @Field()
  firstname: string;
  
  @Field()
  lastname: string;
  
  @Field()
  email: string;
  
  @Field()
  password: string;
}

@Resolver(User)
export class UsersResolver {
  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    return User.find();
  }

  @Mutation(() => User)
  async createUser(
    @Arg("data") data: Create,
  ): Promise<User> {
    const user = Object.assign(new User(), { ...data });
    await User.save(user);
    return user;
  }

  @FieldResolver(() => [Pet])
  async pets(@Root() root: User): Promise<Pet[]> {
    return Pet.find({
      where: {
        userId: root.id,
      },
    });
  }
}
