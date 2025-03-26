// import { PermisosModulos } from 'src/mod/permisos/modulos/entities/modulo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('mod_zona_social')
export class Zona {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    nombre: string;
  
    @Column()
    descripcion: string;

    @Column()
    ubicacion: string;
  
    @Column()
    fecha_creacion: string;
  
    @Column()
    fecha_actualizacion: string;

  // @OneToMany(() => PermisosModulos, (permiso) => permiso.userId)
  // permiso: PermisosModulos
}