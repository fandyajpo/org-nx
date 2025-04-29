import { Controller, Get, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { interval, map, Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Sse('sse')
  sse(): Observable<{ data: { hello: string } }> {
    return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}
