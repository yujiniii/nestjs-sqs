import { config } from '../config';
import { Injectable } from '@nestjs/common';
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs';
import * as AWS from 'aws-sdk';

console.log('config.AWS_REGION', config);
const q = config.TEST_QUEUE;

@Injectable()
export class MessageHandler {
  constructor() {}

  @SqsMessageHandler(q, false)
  async handleMassage(message: AWS.SQS.Message) {
    const obj: any = await JSON.parse(message.Body);
    // as {
    //   message: string;
    //   date: string;
    // };
    console.log('received : ', obj.message);
  }

  @SqsConsumerEventHandler(q, 'message_received')
  public onMessageReceived(message: AWS.SQS.Message) {
    //console.log('msg', message);
    console.log('Start transcoding...');
  }

  @SqsConsumerEventHandler(q, 'message_processed')
  public onMessageProcessed(message: AWS.SQS.Message) {
    console.log('Transcoding completed');
  }

  @SqsConsumerEventHandler(q, 'processing_error')
  public onProcessingError(error: Error, message: AWS.SQS.Message) {
    console.log(error);
    console.log(message);
  }
}
