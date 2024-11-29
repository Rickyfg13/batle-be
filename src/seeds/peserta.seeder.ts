import { DataSource } from 'typeorm';
import { Peserta } from '../v1/peserta/entities/peserta.entity';
import {faker} from '@faker-js/faker';

export async function seedPegawai(dataSource: DataSource) {
  const pegawaiRepository = dataSource.getRepository(Peserta);

  // Generate 10 dummy employees
  const dummyPegawai = Array.from({ length: 10 }).map(() => ({
    nama: faker.person.fullName(), // Random full name
    nik: faker.string.numeric(16), // Random 16-digit NIK
    jenis_kelamin: faker.helpers.arrayElement(['Laki-laki', 'Perempuan']),
    pekerjaan: faker.person.jobTitle(), // Random job title
    motivasi_hidup: faker.lorem.sentence(), // Random motivation
  }));

  // Save data to database
  await pegawaiRepository.save(dummyPegawai);
  console.log('Dummy pegawai data has been seeded!');
}


