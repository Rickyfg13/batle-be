import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('peserta')
export class Peserta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nama: string;

  @Column({ length: 16, unique: true })
  nik: string;

  @Column({ length: 10 })
  jenis_kelamin: string;

  @Column({ length: 100, nullable: true })
  pekerjaan: string;

  @Column({ type: 'text', nullable: true })
  motivasi_hidup: string;
}
