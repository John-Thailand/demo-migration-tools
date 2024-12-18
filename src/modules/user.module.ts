import { UserController } from "@/controllers/user.controller";
import { Book } from "@/entity/Book";
import { User } from "@/entity/User";
import { UserService } from "@/services/user.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([User, Book])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
