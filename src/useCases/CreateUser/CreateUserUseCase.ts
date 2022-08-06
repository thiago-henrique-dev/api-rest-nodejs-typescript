import { IUsersRepository } from '../../repositories/iUserRepositories';
import { ICreateUserRequestDTO }from './CreateUserDTO'
import { User } from '../../entities/Users'
import { IMailProvider } from '../../providers/IMailProvider'

export class CreateUserUseCase{
    
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ){}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new Error('User already exists')
        }

        const user = new User(data)

        await this.usersRepository.save(user)

        await  this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Thiago Henrique',
                email: 'thiagohenriquedev@gmail.com'
            },
            subject: 'Seja bem-vindo Thiago Henrique',
            body: '<p>Você ja pode fazer login em nossa Plataforma</p>'
        })

    }
}