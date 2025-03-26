// import { PermisosModulos } from 'src/mod/permisos/modulos/entities/modulo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('mod_mantenimiento_historico')
export class Historico {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    observacion: string;
  
    @Column()
    recomendacion: string;

  // @OneToMany(() => PermisosModulos, (permiso) => permiso.userId)
  // permiso: PermisosModulos
}