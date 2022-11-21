import { Telephone } from './entities/telephone.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTelephoneDto } from './dto/create-telephone.dto';
import { UpdateTelephoneDto } from './dto/update-telephone.dto';
import { Repository, Unique } from 'typeorm';

@Injectable()
export class TelephoneService {
  constructor(
    @InjectRepository(Telephone)
    private telephoneRepository: Repository<Telephone>,
  ) {}
  async create(createTelephoneDto: CreateTelephoneDto) {
    return await this.telephoneRepository.create(createTelephoneDto).save();
  }

  async findAll() {
    return await this.telephoneRepository.find({});
  }

  async findOne(id: string) {
    return await this.telephoneRepository.findOne({ where: { id } });
  }

  async update(id: string, updateTelephoneDto: UpdateTelephoneDto) {
    return await this.telephoneRepository.update(id, updateTelephoneDto);
  }

  remove(id: number) {
    return `This action removes a #${id} telephone`;
  }
}
