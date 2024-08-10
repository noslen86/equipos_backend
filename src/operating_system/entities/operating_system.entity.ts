import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Computer } from '../../computer/entities/computer.entity';

@Entity('operating_systems')
@ObjectType()
export class OperatingSystem {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Nombre', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Versión', nullable: false })
  version: string;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Tipo de arquitectura', nullable: false })
  architecture: string;

  @OneToMany(() => Computer, (computer: Computer) => computer.operatingSystem)
  @Field(() => [Computer])
  computers: Computer[];
}
