import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_entity')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  creatorId: string;

  @Column()
  username: string;

  @Column({ type: String, default: '' })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: String })
  nickname: string;

  // @Column({ type: 'enum', enum: UserType, default: UserType.KAKAO })
  // type: UserType; // 로그인 타입

  // @Column({ type: String, default: '/images/profile.png' })
  // profileImage: string;

  // @OneToMany(() => FileImageEntity, (files) => files.user)
  // files: FileImageEntity[];
}