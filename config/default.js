module.exports = {
  db: {
    user: "postgres",
    host: "localhost",
    dbName: "postgres",
    dbPassword: "admin",
    dbPort: 5432
  },
  user: {
    tableName: 'public.users',
  },
  practice: {
    tableName: 'practice',
  },
  attendance: {
    tableName: 'attendance',
  },
  server: {
    port: 3010,
  },
  app: {
    name: "Sports-timetable",
  }
}
