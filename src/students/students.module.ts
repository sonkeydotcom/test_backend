import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { Jobs } from 'src/company/entity/jobs.entity';
import { SavedApplications } from './entity/saved.entity';
import { AppliedStudents } from 'src/company/entity/applied-applicants.entity';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      Student,
      Jobs,
      SavedApplications,
      AppliedStudents,
    ]),
  ],
})
export class StudentsModule {}
