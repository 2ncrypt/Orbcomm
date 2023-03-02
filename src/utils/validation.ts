import * as Joi from 'joi';

// 다음과 같이 사용하는 환경 변수를 validation할 수 있습니다.
export const validation: Joi.Schema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production').required(),
  SERVER_PORT: Joi.number().required(),
}).options({
  abortEarly: true,
});
