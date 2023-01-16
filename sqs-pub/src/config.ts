import * as dotenv from 'dotenv';

dotenv.config();
export const config = {
  TEST_QUEUE: process.env.TEST_QUEUE,
  TEST_QUEUE_URL:
    'https://sqs.ap-northeast-2.amazonaws.com/399320817899/my-q.fifo',
  AWS_REGION: process.env.AWS_REGION,
  ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
  SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
};
