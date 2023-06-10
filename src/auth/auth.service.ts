import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup(): object {
    return { msg: 'I have singup using nestjs' };
  }

  singin(): object {
    return { msg: 'I have singin using nestjs' };
  }
}
