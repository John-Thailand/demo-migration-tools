import { UserService } from "@/services/user.service";
import { Controller, Get, Param } from "@nestjs/common";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.getUsersWithBooks();
  }
}
