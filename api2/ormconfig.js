require('dotenv/config');

const rootDir = process.env.NODE_ENV === "development" ?
  "src" :
  "dist"

module.exports = {
  "type": "mysql",
  "host": "mysql741.umbler.com",
  "port": 41890,
  "username": "thiagosiqueira",
  "password": "srcobgvyr1",
  "database": "marketplaceappu",
  "entities": [rootDir + "/modules/**/infra/typeorm/entities/*.{js,ts}"],
  "migrations": [rootDir + "/shared/infra/typeorm/migrations/*.{js,ts}"],
  "cli": {
    "migrationsDir": rootDir + "/shared/infra/typeorm/migrations"

  }
}
