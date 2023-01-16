import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';
import { SendMessageDto } from './dto/sendMessage.dto';
import { v4 as uuid } from 'uuid';
import { config } from '../config';

@Injectable()
export class ProducerService {
  constructor(private readonly sqsService: SqsService) {}

  async sendMessage(body: SendMessageDto) {
    const message: any = JSON.stringify(body);
    console.log(message);
    const newId = uuid();
    try {
      await this.sqsService
        .send(config.TEST_QUEUE, {
          id: newId,
          body: message,
          groupId: newId,
          deduplicationId: newId,
          delaySeconds: 0,
        })
        .then(() => {
          console.log('gooood');
        });
    } catch (e) {
      console.log(e);
    }
  }
}
