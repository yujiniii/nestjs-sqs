import { Module } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';
import * as AWS from 'aws-sdk';
import { SqsModule } from '@ssut/nestjs-sqs';
import { config } from '../config';

AWS.config.update({
  region: config.AWS_REGION,
  accessKeyId: config.ACCESS_KEY_ID,
  secretAccessKey: config.SECRET_ACCESS_KEY,
});

@Module({
  imports: [
    SqsModule.register({
      producers: [
        {
          name: config.TEST_QUEUE, // name of the queue
          queueUrl: config.TEST_QUEUE_URL,
          region: config.AWS_REGION,
        },
      ],
    }),
  ],
  controllers: [ProducerController],
  providers: [ProducerService],
  exports: [ProducerService],
})
export class ProducerModule {}
