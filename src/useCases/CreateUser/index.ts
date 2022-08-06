import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUserRepository'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserControllers'

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)


export { createUserUseCase, createUserController }
