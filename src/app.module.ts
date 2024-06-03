import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ 

  MongooseModule.forRoot('mongodb+srv://dulanmihimansa:test123@cluster0.koobcgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
  StudentsModule,
  AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

