import { Allow, IsNotEmpty, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { JoinColumn, OneToOne } from 'typeorm';

export class TestDto {
  @IsNotEmpty()
  @IsString()
  readonly test1: string;

  @IsNotEmpty()
  @IsString()
  readonly test2: string;
}

export class CreateOrbTestDto {
  @IsNotEmpty()
  @IsString()
  readonly messageId: string;

  @IsString()
  @IsOptional()
  cargoStatus?: string;

  @IsString()
  @IsOptional()
  doorStatus?: string;

  @IsString()
  @IsOptional()
  commandStatus?: string;

  @OneToOne(() => TestDto, { cascade: true })
  @JoinColumn()
  test: TestDto;
}
