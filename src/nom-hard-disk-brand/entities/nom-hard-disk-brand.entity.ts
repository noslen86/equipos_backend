import { ObjectType, Field, Int } from '@nestjs/graphql';
import { NomHardDiskModel } from '../../nom-hard-disk-model/entities/nom-hard-disk-model.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nom_hard_disk_brands')
@ObjectType()
export class NomHardDiskBrand {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column({ type: 'varchar', nullable: false, length: '10', name: 'name' })
  @Field({ name: 'name', description: 'Nombre', nullable: false })
  name: string;

  @OneToMany(
    () => NomHardDiskModel,
    (nomhardDiskModel: NomHardDiskModel) => nomhardDiskModel.nomHardDiskBrand,
    { cascade: true },
  )
  @Field(() => NomHardDiskModel)
  nomHardDiskModels: NomHardDiskModel[];
}
