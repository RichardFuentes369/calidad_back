// import { PermisosModulos } from 'src/mod/permisos/modulos/entities/modulo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ordenStatus } from './enums/ordenStatus';

@Entity('mod_mantenimiento_orden')
export class Orden {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    descripcion: string;
  
    @Column()
    precio: number;
    
    @Column()
    fecha_mantenimiento: string;
  
    @Column({ 
      type: 'timestamp', 
      default: () => 'CURRENT_TIMESTAMP' 
    })
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