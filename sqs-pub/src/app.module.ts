import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducerModule } from './producer/producer.module';

@Module({
  imports: [ProducerModule], //ConsumerModule
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
