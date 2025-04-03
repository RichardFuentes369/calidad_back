// import { PermisosModulos } from 'src/mod/permisos/modulos/entities/modulo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from 'typeorm';
import { ordenStatus } from './enums/ordenStatus';

@Entity('mod_mantenimiento_orden')
export class Orden {

    @BeforeInsert()
    generateSerial() {
        this.serial = `ORD-${Date.now()}`;
        this.fecha_creacion = Date.now();
    }

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    serial: string;
    
    @Column()
    descripcion: string;
  
    @Column()
    precio: number;
    
    @Column()
    fecha_mantenimiento: number;
  
    @Column()
    fecha_creacion: number;
  
    @Column({
      nullable: true
    })
    fecha_actualizacion: number;

    @Column({
      type: 'enum',
      enum: ordenStatus,
      default: ordenStatus.EnEspera,
    })
    estado: ordenStatus;

  // @OneToMany(() => PermisosModulos, (permiso) => permiso.userId)
  // permiso: PermisosModulos
}