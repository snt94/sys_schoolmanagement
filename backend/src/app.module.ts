import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AlunosModule } from './alunos/alunos.module';
import { ProfessoresModule } from './professores/professores.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { NotasModule } from './notas/notas.module';
import { TurmasModule } from './turmas/turmas.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    AlunosModule,
    ProfessoresModule,
    DisciplinasModule,
    NotasModule,
    TurmasModule,
  ],
  controllers: [AppController],
})
export class AppModule {}