import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { NomHardDiskBrand } from '../../nom-hard-disk-brand/entities/nom-hard-disk-brand.entity';

@Entity('nom_hard_disk_models')
@ObjectType()
export class NomHardDiskModel {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', nullable: false, length: '50', name: 'name' })
  @Field({ description: 'Nombre', nullable: false })
  name: string;

  @ManyToOne(
    () => NomHardDiskBrand,
    (nomhardDiskBrand: NomHardDiskBrand) => nomhardDiskBrand.nomHardDiskModels,
  )
  @Field(() => NomHardDiskBrand)
  nomHardDiskBrand: NomHardDiskBrand;
}
