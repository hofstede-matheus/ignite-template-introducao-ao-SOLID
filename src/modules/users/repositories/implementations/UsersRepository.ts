import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User(name, email);

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.filter((user) => {
      if (user.id === id) return user;
      return undefined;
    });

    return user[0];
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.filter((user) => {
      if (user.email === email) return user;
      return undefined;
    })[0];

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = this.findById(receivedUser.id);
    const indexOfUser = this.users.indexOf(user);

    user.admin = true;

    this.users[indexOfUser] = user;

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
