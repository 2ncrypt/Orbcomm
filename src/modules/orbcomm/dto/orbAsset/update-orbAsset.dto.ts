import { PartialType } from '@nestjs/swagger';
import { OrbAssetCreateDto } from './create-orbAsset.dto';

export class UpdateOrbAssetDto extends PartialType(OrbAssetCreateDto) {}
