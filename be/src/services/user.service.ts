import User from '../models/User';

export class UserService {
  static async register(
    { fullName, email, password, confirmPassword }: any,
    createdBy = 'system'
  ) {
    if (password !== confirmPassword) {
      throw new Error('Şifreler uyuşmuyor');
    }

    const exists = await User.findOne({ where: { email } });
    if (exists) throw new Error('Bu e-posta zaten kullanılıyor');

    return await User.create({
      fullName,
      email,
      password,
      createdBy,
    });
  }

  static async login({ email, password }: any) {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await user.validatePassword(password))) {
      throw new Error('Geçersiz email ya da şifre');
    }

    return user;
  }
}
