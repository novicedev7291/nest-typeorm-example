import { Module } from "@nestjs/common";
import { dbProviders } from "./src/database.provider";


@Module({
    providers: [...dbProviders],
    exports: [...dbProviders]
})
export class DatabaseModule {}
