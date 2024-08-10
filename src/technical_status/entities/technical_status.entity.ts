import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Computer } from '../../computer/entities/computer.entity';

@Entity('technical_statuses')
@ObjectType()
export class TechnicalStatus {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Nombre', nullable: false })
  name: string;

  @OneToMany(() => Computer, (computer: Computer) => computer.technicalStatus)
  @Field(() => [Computer])
  computers: Computer[];
}
