import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { HardDisk } from '../../hard_disk/entities/hard_disk.entity';

@Entity('nom_hard_disk_types')
@ObjectType()
export class NomHardDiskType {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', nullable: false, length: '5', name: 'name' })
  @Field({ description: 'Nombre', nullable: false })
  name: string;

  @Field(() => [HardDisk])
  hardDisks: HardDisk[];
}
