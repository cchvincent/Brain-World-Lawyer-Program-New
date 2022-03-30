const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('passport');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const db = require('./db/models');
const config = require('./config');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const authRoutes = require('./routes/auth');
const fileRoutes = require('./routes/file');

const handlersRoutes = require('./routes/handlers');

const introducersRoutes = require('./routes/introducers');

const letterheadingRoutes = require('./routes/letterheading');

const officesRoutes = require('./routes/offices');

const progressRoutes = require('./routes/progress');

const refnofilesseqRoutes = require('./routes/refnofilesseq');

const rolesRoutes = require('./routes/roles');

const staffsRoutes = require('./routes/staffs');

const supervisorsRoutes = require('./routes/supervisors');

const usersrolesRoutes = require('./routes/usersroles');

const bw_casefilesRoutes = require('./routes/bw_casefiles');

const bw_filedocsRoutes = require('./routes/bw_filedocs');

const bw_clientsRoutes = require('./routes/bw_clients');

const bw_companysRoutes = require('./routes/bw_companys');

const bw_caseserialRoutes = require('./routes/bw_caseserial');

const bw_casestatusRoutes = require('./routes/bw_casestatus');

const bw_casetypesRoutes = require('./routes/bw_casetypes');

const bw_categoryRoutes = require('./routes/bw_category');

const bw_caseheaderreferencesRoutes = require('./routes/bw_caseheaderreferences');

const usersRoutes = require('./routes/users');

const options = {
  definition: {
    openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "Brain World Lawyer Program New",
        description: "Brain World Lawyer Program New Online REST API for Testing and Prototyping application. You can perform all major operations with your entities - create, delete and etc.",
      },
    servers: [
      {
        url: config.swaggerUrl,
        description: "Development server",
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      },
      responses: {
        UnauthorizedError: {
          description: "Access token is missing or invalid"
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use('/api-docs', function (req, res, next) {
    swaggerUI.host = req.get('host');
    next()
  }, swaggerUI.serve, swaggerUI.setup(specs))

app.use(cors({origin: true}));
require('./auth/auth');

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/file', fileRoutes);

app.use('/api/handlers', passport.authenticate('jwt', {session: false}), handlersRoutes);

app.use('/api/introducers', passport.authenticate('jwt', {session: false}), introducersRoutes);

app.use('/api/letterheading', passport.authenticate('jwt', {session: false}), letterheadingRoutes);

app.use('/api/offices', passport.authenticate('jwt', {session: false}), officesRoutes);

app.use('/api/progress', passport.authenticate('jwt', {session: false}), progressRoutes);

app.use('/api/refnofilesseq', passport.authenticate('jwt', {session: false}), refnofilesseqRoutes);

app.use('/api/roles', passport.authenticate('jwt', {session: false}), rolesRoutes);

app.use('/api/staffs', passport.authenticate('jwt', {session: false}), staffsRoutes);

app.use('/api/supervisors', passport.authenticate('jwt', {session: false}), supervisorsRoutes);

app.use('/api/usersroles', passport.authenticate('jwt', {session: false}), usersrolesRoutes);

app.use('/api/bw_casefiles', passport.authenticate('jwt', {session: false}), bw_casefilesRoutes);

app.use('/api/bw_filedocs', passport.authenticate('jwt', {session: false}), bw_filedocsRoutes);

app.use('/api/bw_clients', passport.authenticate('jwt', {session: false}), bw_clientsRoutes);

app.use('/api/bw_companys', passport.authenticate('jwt', {session: false}), bw_companysRoutes);

app.use('/api/bw_caseserial', passport.authenticate('jwt', {session: false}), bw_caseserialRoutes);

app.use('/api/bw_casestatus', passport.authenticate('jwt', {session: false}), bw_casestatusRoutes);

app.use('/api/bw_casetypes', passport.authenticate('jwt', {session: false}), bw_casetypesRoutes);

app.use('/api/bw_category', passport.authenticate('jwt', {session: false}), bw_categoryRoutes);

app.use('/api/bw_caseheaderreferences', passport.authenticate('jwt', {session: false}), bw_caseheaderreferencesRoutes);

app.use('/api/users', passport.authenticate('jwt', {session: false}), usersRoutes);

const publicDir = path.join(
  __dirname,
  '../public',
);

if (fs.existsSync(publicDir)) {
  app.use('/', express.static(publicDir));

  app.get('*', function(request, response) {
    response.sendFile(
      path.resolve(publicDir, 'index.html'),
    );
  });
}

const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});

module.exports = app;
