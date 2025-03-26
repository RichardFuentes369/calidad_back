// import { PermisosModulos } from 'src/mod/permisos/modulos/entities/modulo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('mod_proveedores')
export class Proveedor {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  razonSocial: string;

  @Column()
  telefono: string;
  
  @Column({ unique: true })
  email: string;

  @Column()
  estado: string;

  @Column()
  fecha_creacion: string;

  @Column()
  fecha_actualizacion: string;
  // @OneToMany(() => PermisosModulos, (permiso) => permiso.userId)
  // permiso: PermisosModulos
}