import { Orden } from '@module/mantenimiento/orden/entities/orden.entity';
import { Proveedor } from '@module/proveedor/entities/proveedor.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm';

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

    @Column({ name: 'orden_id', nullable: true})
    ordenId: number;

    @ManyToOne(() => Orden, { nullable: true })
    @JoinColumn({ name: 'orden_id' })
    orden_id: Orden;

    @ManyToOne(() => Proveedor, { nullable: true })
    @JoinColumn({ name: 'proveedor_id' })
    proveedor_id: Proveedor;

}