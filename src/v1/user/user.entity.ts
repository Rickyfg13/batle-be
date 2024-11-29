import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column('simple-array') // Digunakan untuk menyimpan array sederhana seperti peran
  roles: string[];
}
