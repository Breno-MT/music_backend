# Music Forum

### Important Commands
- Install Docker
> docker compose up --build
- After everything is good to go, run the command below to create users table
```shell
docker exec -i music_postgres \
 psql -U music_user -d music_db \
< src/database/migrations/001_create_users.sql
```
