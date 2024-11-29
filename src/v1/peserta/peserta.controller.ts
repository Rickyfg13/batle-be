import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PesertaService } from './peserta.service';
// import { CreatePesertaDto } from './dto/create-peserta.dto';
// import { UpdatePesertaDto } from './dto/update-peserta.dto';

@Controller('peserta')
export class PesertaController {
  constructor(private readonly pesertaService: PesertaService) {}

 

 
}
