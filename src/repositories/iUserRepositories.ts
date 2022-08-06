import { User } from "../entities/Users";


export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>
}