import { Orden } from '@module/mantenimiento/orden/entities/orden.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity('mod_mantenimiento_historico')
export class Historico {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    observacion: string;

    @Column()
    precio: number;
  
    @Column()
    recomendacion: string;

    @ManyToOne(() => Orden, { nullable: true })
    @JoinColumn({ name: 'orden_id' })
    orden: Orden;
}