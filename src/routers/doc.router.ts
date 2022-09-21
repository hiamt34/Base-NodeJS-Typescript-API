import { Express } from "express"
import swaggerJsdoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import { swaggerDefinition } from "../doc/swaggerDef"

export const docRouter = (app: Express) => {
    const optionV1 = {
        swaggerDefinition,
        apis: ['./src/doc/v1/**/*.yaml', './src/doc/v1/**/*.ts'],
    }
    // const optionV2 = {
    //     swaggerDefinition,
    //     apis: ['./src/doc/v2/**/*.yaml', './src/doc/v2/**/*.ts'],
    // }
    const swaggerDocumentOne = swaggerJsdoc(optionV1);
    // const swaggerDocumentTwo = swaggerJsdoc(optionV2);

    const swaggerHtmlV1 = swaggerUi.generateHTML(swaggerDocumentOne, {
        explorer: false,
    })
    // const swaggerHtmlV2 = swaggerUi.generateHTML(swaggerDocumentTwo, {
    //     explorer: false,
    // })
    app.use('/doc-api', swaggerUi.serveFiles(swaggerDocumentOne, {
        explorer: false,
    }));
    app.get('/doc-api', (_req, res) => { res.send(swaggerHtmlV1) });

    // app.use('/doc-api/v2', swaggerUi.serveFiles(swaggerDocumentTwo, {
    //     explorer: false
    // }));
    // app.get('/doc-api/v2', (_req, res) => { res.send(swaggerHtmlV2) });

}
  