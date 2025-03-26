// import { PermisosModulos } from 'src/mod/permisos/modulos/entities/modulo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('mod_mantenimiento_orden')
export class Orden {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    descripcion: string;
  
    @Column()
    precio: string;
    
    @Column()
    fecha_mantenimiento: string;
  
    @Column()
    fecha_creacion: string;
  
    @Column()
    fecha_actualizacion: string;

    @Column()
    estado: string;

  // @OneToMany(() => PermisosModulos, (permiso) => permiso.userId)
  // permiso: PermisosModulos
}