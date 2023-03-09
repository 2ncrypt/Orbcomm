import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity('orbTest')
export class OrbTest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  messageId: string;

  @Column({ type: 'varchar', nullable: true })
  doorStatus: string | null;

  @Column({ type: 'varchar', nullable: true })
  commandStatus: string | null;
}

@Entity('testDto')
export class TestDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ type: 'varchar', nullable: true })
  test1: string;

  @IsString()
  @Column({ type: 'varchar', nullable: true })
  test2: string;
}
