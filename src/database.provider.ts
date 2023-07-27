import { DataSource } from 'typeorm';

export const dbProviders = [
  {
    provide: 'data-source',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '127.0.0.1',
        port: 3307,
        username: 'root',
        password: 'root',
        database: 'projects',
        synchronize: false,
        entities: [__dirname + '/**/*.entity{.ts, .js}'],
      });

      return dataSource.initialize();
    },
  },
];
