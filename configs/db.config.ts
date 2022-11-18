import { ConfigService } from '@nestjs/config';

const dbConfig: any = async (configService: ConfigService) => ({
  type: 'postgres',
  host: configService.get('DB_HOST', 'localhost'),
  port: configService.get<number>('DB_PORT', 5432),
  username: configService.get('DB_USER', 'postgres'),
  password: configService.get('DB_PASS', 'postgres'),
  database: configService.get('DB_SCHEMA', 'telefone'),
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
});

export { dbConfig };
