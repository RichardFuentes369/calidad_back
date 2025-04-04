// import { PermisosModulos } from 'src/mod/permisos/modulos/entities/modulo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('mod_zona_social')
export class Zona {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column({ nullable: false })
    nombre: string;
  
    @Column({ nullable: false })
    descripcion: string;

    @Column()
    ubicacion: string;
  
    @Column({ 
      type: 'timestamp', 
      default: () => 'CURRENT_TIMESTAMP' 
    })
    fecha_creacion: number;
  
    @Column({
      nullable: true
    })
    fecha_actualizacion: number;

  // @OneToMany(() => PermisosModulos, (permiso) => permiso.userId)
  // permiso: PermisosModulos
}