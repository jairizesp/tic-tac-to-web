"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
        origin: 'https://tic-tac-toe-client-khaki.vercel.app',
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map