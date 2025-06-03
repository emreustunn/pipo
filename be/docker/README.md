# PostgreSQL Docker Kurulumu

Bu dizin, PostgreSQL veritabanı ve pgAdmin için Docker Compose yapılandırmasını içerir.

## Gereksinimler

- Docker
- Docker Compose

## Kurulum

1. `.env` dosyasını oluşturun:
```bash
cp .env.example .env
```

2. `.env` dosyasındaki değişkenleri kendi ihtiyaçlarınıza göre düzenleyin.

3. Docker container'larını başlatın:
```bash
docker-compose up -d
```

## Erişim Bilgileri

### PostgreSQL
- Host: localhost
- Port: 5432 (veya .env dosyasında belirtilen port)
- Kullanıcı adı: pipo (veya .env dosyasında belirtilen kullanıcı)
- Şifre: pipo123 (veya .env dosyasında belirtilen şifre)
- Veritabanı: pipo_db (veya .env dosyasında belirtilen veritabanı)

### pgAdmin
- URL: http://localhost:5050 (veya .env dosyasında belirtilen port)
- E-posta: admin@pipo.com (veya .env dosyasında belirtilen e-posta)
- Şifre: admin123 (veya .env dosyasında belirtilen şifre)

## Veritabanına Bağlanma

### pgAdmin ile
1. pgAdmin'e giriş yapın
2. Servers > Register > Server
3. General sekmesinde bir isim verin
4. Connection sekmesinde:
   - Host: postgres
   - Port: 5432
   - Database: pipo_db
   - Username: pipo
   - Password: pipo123

### Uygulama ile
```typescript
// Örnek bağlantı bilgileri
const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'pipo_db',
  user: 'pipo',
  password: 'pipo123'
};
```

## Komutlar

- Container'ları başlatma: `docker-compose up -d`
- Container'ları durdurma: `docker-compose down`
- Logları görüntüleme: `docker-compose logs -f`
- Container'ları yeniden başlatma: `docker-compose restart` 