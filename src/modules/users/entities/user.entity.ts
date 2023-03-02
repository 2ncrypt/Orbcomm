import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as argon2 from 'argon2';

@Entity('user')
export class User {
  //Primary Key 설정 Decorate
  @PrimaryGeneratedColumn()
  id: number;
  //https://typeorm.io/entities#column-options
  //TypeORM 옵션들
  @Column({ length: 32 })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  // 데이터베이스에 insert 하기 전에 수행되는 녀석입니다. 비밀번호를 복호화 할 수 없게 hash 함수를 이용해 저장합시다.
  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password);
  }

  @Column({ default: '' })
  imageLink: string;
}
