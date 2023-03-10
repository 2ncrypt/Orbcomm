import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orbAuthToken')
export class orbAuthToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  accessToken: string;

  @Column({ nullable: false })
  refreshToken: string;

  @Column({ nullable: false })
  accessTokenexpireOn: string;
  @Column({ nullable: false })
  refreshTokenexpireOn: string;
  @Column({ nullable: false })
  userName: string;
  @Column({ nullable: false })
  userGuid: string;
  @Column({ nullable: false })
  accountGuid: string;
}
