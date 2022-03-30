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

const bw_casefilesRoutes = require('./routes/bw_casefiles');

const bw_filedocsRoutes = require('./routes/bw_filedocs');

const bw_clientsRoutes = require('./routes/bw_clients');

const bw_companysRoutes = require('./routes/bw_companys');

const bw_caseserialRoutes = require('./routes/bw_caseserial');

const bw_casestatusRoutes = require('./routes/bw_casestatus');

const bw_casetypesRoutes = require('./routes/bw_casetypes');

const bw_categoryRoutes = require('./routes/bw_category');

const bw_caseheaderRoutes = require('./routes/bw_caseheader');

const bw_handlersRoutes = require('./routes/bw_handlers');

const bw_introducersRoutes = require('./routes/bw_introducers');

const bw_letterheadingRoutes = require('./routes/bw_letterheading');

const bw_officesRoutes = require('./routes/bw_offices');

const bw_progressRoutes = require('./routes/bw_progress');

const bw_refnofilesseqRoutes = require('./routes/bw_refnofilesseq');

const bw_rolesRoutes = require('./routes/bw_roles');

const bw_staffsRoutes = require('./routes/bw_staffs');

const bw_supervisorsRoutes = require('./routes/bw_supervisors');

const bw_usersrolesRoutes = require('./routes/bw_usersroles');

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

app.use('/api/bw_casefiles', passport.authenticate('jwt', {session: false}), bw_casefilesRoutes);

app.use('/api/bw_filedocs', passport.authenticate('jwt', {session: false}), bw_filedocsRoutes);

app.use('/api/bw_clients', passport.authenticate('jwt', {session: false}), bw_clientsRoutes);

app.use('/api/bw_companys', passport.authenticate('jwt', {session: false}), bw_companysRoutes);

app.use('/api/bw_caseserial', passport.authenticate('jwt', {session: false}), bw_caseserialRoutes);

app.use('/api/bw_casestatus', passport.authenticate('jwt', {session: false}), bw_casestatusRoutes);

app.use('/api/bw_casetypes', passport.authenticate('jwt', {session: false}), bw_casetypesRoutes);

app.use('/api/bw_category', passport.authenticate('jwt', {session: false}), bw_categoryRoutes);

app.use('/api/bw_caseheader', passport.authenticate('jwt', {session: false}), bw_caseheaderRoutes);

app.use('/api/bw_handlers', passport.authenticate('jwt', {session: false}), bw_handlersRoutes);

app.use('/api/bw_introducers', passport.authenticate('jwt', {session: false}), bw_introducersRoutes);

app.use('/api/bw_letterheading', passport.authenticate('jwt', {session: false}), bw_letterheadingRoutes);

app.use('/api/bw_offices', passport.authenticate('jwt', {session: false}), bw_officesRoutes);

app.use('/api/bw_progress', passport.authenticate('jwt', {session: false}), bw_progressRoutes);

app.use('/api/bw_refnofilesseq', passport.authenticate('jwt', {session: false}), bw_refnofilesseqRoutes);

app.use('/api/bw_roles', passport.authenticate('jwt', {session: false}), bw_rolesRoutes);

app.use('/api/bw_staffs', passport.authenticate('jwt', {session: false}), bw_staffsRoutes);

app.use('/api/bw_supervisors', passport.authenticate('jwt', {session: false}), bw_supervisorsRoutes);

app.use('/api/bw_usersroles', passport.authenticate('jwt', {session: false}), bw_usersrolesRoutes);

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
