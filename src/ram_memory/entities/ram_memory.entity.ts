import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Computer } from '../../computer/entities/computer.entity';

@Entity('ram_memories')
@ObjectType()
export class RamMemory {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Capacidad', nullable: false })
  capacity: string;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Tipo', nullable: false })
  type: string;

  @OneToMany(() => Computer, (computer: Computer) => computer.ram)
  @Field(() => [Computer])
  computers: Computer[];
}
