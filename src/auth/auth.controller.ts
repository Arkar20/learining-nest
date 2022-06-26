import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get()
  getAllUser() {
    return 'hello auth api';
  }

  @Post('create')
  create(@Body() data, @Res() res: Response) {
    const result = this.authService.create(data);

    return res.json(result);
  }

  @Patch(':id')
  update(@Param('name') _name: string) {
    //update fun from service
    return _name;
  }
  @Delete(':id')
  delete(@Param('name') id: string) {
    //update fun from service
    return 'success';
  }
}
