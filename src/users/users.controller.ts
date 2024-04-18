import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { user_list } from "src/mock_data/users";
@Controller("users")
export class UsersController {
  /**
   * Get /users
   * Get /users/:id
   * Post /users
   * Patch /users
   * Delete /users/:id
   */

  @Get() // get users ir users?role=value
  findAll(@Query("role") role?: "ADMIN" | "INTERN" | "ENGINEER") {
    if (role) {
      return user_list.filter((user) => user.role == role);
    }
    return user_list;
  }

  //   @Get("inters")
  //   findAllInterns() {
  //     return [];
  //   }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return {
      id,
      name: "id:" + id,
    };
  }

  @Post()
  create(@Body() users: {}) {
    console.log("🚀 ~ UsersController ~ create ~ users:", users);
    return users;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() userInfo: {}) {
    return {
      id,
      ...userInfo,
    };
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return {
      id,
    };
  }
}
