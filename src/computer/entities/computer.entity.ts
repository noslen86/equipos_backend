import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HardDisk } from '../../hard_disk/entities/hard_disk.entity';
import { OperatingSystem } from '../../operating_system/entities/operating_system.entity';
import { RamMemory } from '../../ram_memory/entities/ram_memory.entity';
import { TechnicalStatus } from '../../technical_status/entities/technical_status.entity';
import { Micro } from '../../micro/entities/micro.entity';

@Entity('computers')
@ObjectType()
export class Computer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'int', nullable: false })
  @Field(() => Int, { nullable: false, description: 'Inventario' })
  inventory: number;

  @Column({ type: 'varchar', nullable: true, length: 255 })
  @Field({ description: 'Información adicional', nullable: true })
  description?: string;

  @Column({ type: 'varchar' })
  @Field({ description: 'Ubicación' })
  location: string;

  @ManyToOne(() => HardDisk, (hardDiskMain: HardDisk) => hardDiskMain.computers)
  @Field(() => HardDisk)
  hardDiskMain: HardDisk;

  @ManyToOne(
    () => HardDisk,
    (hardDiskSecondary: HardDisk) => hardDiskSecondary.computers,
  )
  @Field(() => HardDisk)
  hardDiskSecondary: HardDisk;

  @ManyToOne(() => Micro, (micro: Micro) => micro.computers)
  @Field(() => Micro)
  micro: Micro;

  @ManyToOne(
    () => OperatingSystem,
    (operatingSystem: OperatingSystem) => operatingSystem.computers,
  )
  @Field(() => OperatingSystem)
  operatingSystem: OperatingSystem;

  @ManyToOne(() => RamMemory, (ram: RamMemory) => ram.computers)
  @Field(() => RamMemory)
  ram: RamMemory;

  @ManyToOne(
    () => TechnicalStatus,
    (technicalStatus: TechnicalStatus) => technicalStatus.computers,
  )
  @Field(() => TechnicalStatus)
  technicalStatus: TechnicalStatus;
}
