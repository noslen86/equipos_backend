import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Computer } from '../../computer/entities/computer.entity';

@Entity('micro_processors')
@ObjectType()
export class Micro {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Nombre', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Velocidad', nullable: false })
  speed: string;

  @OneToMany(() => Computer, (computer: Computer) => computer.micro)
  @Field(() => [Computer])
  computers: Computer[];
}
