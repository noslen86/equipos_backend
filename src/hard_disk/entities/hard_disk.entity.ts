import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Computer } from '../../computer/entities/computer.entity';

@Entity('hard_disks')
@ObjectType()
export class HardDisk {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Capacidad del disco duro', nullable: false })
  capacity: string;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Marca del disco duro', nullable: false })
  brand: string;

  @Column({ type: 'varchar', nullable: true })
  @Field({ description: 'Modelo del disco duro', nullable: true })
  model?: string;

  @Column({ type: 'varchar', nullable: false })
  @Field({ description: 'Tipo de disco duro', nullable: false })
  type: string;

  @OneToMany(() => Computer, (computer: Computer) => computer.hardDiskMain)
  @Field(() => [Computer])
  computers: Computer[];
}
