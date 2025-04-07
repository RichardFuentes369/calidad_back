// import { PermisosModulos } from 'src/mod/permisos/modulos/entities/modulo.entity';
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, JoinColumn, ManyToOne, BeforeUpdate } from 'typeorm';
import { ordenStatus } from './enums/ordenStatus';
import { Zona } from '@module/zona/entities/zona.entity';

@Entity('mod_mantenimiento_orden')
export class Orden {

    @BeforeInsert()
    generateSerial() {
        this.serial = `ORD-${Date.now()}`;
        this.fecha_creacion = Date.now();
    }
    
    // no funciona el actualizar (actualizo con save y no con update)
    @BeforeUpdate()
    actualizarFecha() {
        this.fecha_actualizacion = Date.now();
    }

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    serial: string;
    
    @Column()
    descripcion: string;
  
    @Column({
      nullable: true
    })
    precio: number;
    
    @Column()
    fecha_mantenimiento: number;
  
    @Column()
    fecha_creacion: number;
  
    @Column({ nullable: true })
    
    fecha_actualizacion: number;

    @Column({
      type: 'enum',
      enum: ordenStatus,
      default: ordenStatus.EnEspera,
    })
    estado: ordenStatus;

    @ManyToOne(() => Zona, zona => zona.ordenes)
    @JoinColumn({ name: 'zona_id' })
    zona_id: Zona;

  // @OneToMany(() => PermisosModulos, (permiso) => permiso.userId)
  // permiso: PermisosModulos
}