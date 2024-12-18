import { User } from "@/entity/User";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // N+1問題の例
  // async getUsersWithBooks(): Promise<User[]> {
  //   // １つのクエリでユーザー情報を全て取得
  //   const users = await this.userRepository.find();
  //   // ユーザーの数（N）分のクエリを実行
  //   for (const user of users) {
  //     const books = await this.userRepository
  //       .createQueryBuilder("user")
  //       .relation(User, "books")
  //       .of(user)
  //       .loadMany();
  //     user.books = books;
  //   }
  //   return users;
  // }

  // 解決策: JOIN句を使う
  // SELECT
  //   user.id AS user_id,
  //   user.name AS user_name,
  //   user.email AS user_email,
  //   books.id AS books_id,
  //   books.name AS books_name,
  //   books.userId AS books_userId,
  // FROM
  //   user
  // LEFT JOIN
  //   book AS books
  // ON
  //   user.id = books.userId;
  async getUsersWithBooks(): Promise<User[]> {
    return this.userRepository
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.books", "books") // ユーザーと本を結合
      .getMany();
  }
}
