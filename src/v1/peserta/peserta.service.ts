import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Peserta } from './entities/peserta.entity';
// import { CreatePesertaDto } from './dto/create-peserta.dto';
// import { UpdatePesertaDto } from './dto/update-peserta.dto';

@Injectable()
export class PesertaService {

  constructor(
    @InjectRepository(Peserta)
    private pesertaRepository: Repository<Peserta>,
  ) {}

  async createPegawai(peserta: Partial<Peserta>): Promise<Peserta> {
    try {
      const newPeserta = this.pesertaRepository.create(peserta);
      return await this.pesertaRepository.save(newPeserta);
    } catch (error) {
      throw new HttpException(
        { message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
