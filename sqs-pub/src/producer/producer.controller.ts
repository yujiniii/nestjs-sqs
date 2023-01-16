import { Body, Controller, Post } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { SendMessageDto } from './dto/sendMessage.dto';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post()
  send(@Body() sendMessageDto: SendMessageDto) {
    return this.producerService.sendMessage(sendMessageDto);
  }
}
