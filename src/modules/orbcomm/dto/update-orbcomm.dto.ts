import { PartialType } from '@nestjs/swagger';
import { CreateOrbcommDto } from './create-orbcomm.dto';

export class UpdateOrbcommDto extends PartialType(CreateOrbcommDto) {}
