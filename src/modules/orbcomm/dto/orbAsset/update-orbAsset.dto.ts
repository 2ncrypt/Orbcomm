import { PartialType } from '@nestjs/swagger';
import { CreateOrbAssetDto } from './create-orbAsset.dto';

export class UpdateOrbAssetDto extends PartialType(CreateOrbAssetDto) {}
