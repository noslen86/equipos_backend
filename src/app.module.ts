import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HardDiskModule } from './hard_disk/hard_disk.module';
import { RamMemoryModule } from './ram_memory/ram_memory.module';
import { TechnicalStatusModule } from './technical_status/technical_status.module';
import { OperatingSystemModule } from './operating_system/operating_system.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  DB_DATABASE,
  DB_HOST,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
} from '../ormconfig';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import * as process from 'process';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputerModule } from './computer/computer.module';
import { MicroModule } from './micro/micro.module';
import { NomHardDiskBrandModule } from './nom-hard-disk-brand/nom-hard-disk-brand.module';
import { NomHardDiskModelModule } from './nom-hard-disk-model/nom-hard-disk-model.module';
import { NomHardDiskTypeModule } from './nom-hard-disk-type/nom-hard-disk-type.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get<string>(DB_HOST),
        port: +ConfigService.get<number>(DB_PORT),
        username: ConfigService.get<string>(DB_USER),
        password: ConfigService.get<string>(DB_PASSWORD),
        database: ConfigService.get<string>(DB_DATABASE),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
    HardDiskModule,
    RamMemoryModule,
    TechnicalStatusModule,
    OperatingSystemModule,
    ComputerModule,
    MicroModule,
    NomHardDiskBrandModule,
    NomHardDiskModelModule,
    NomHardDiskTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
