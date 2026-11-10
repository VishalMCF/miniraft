import {Module} from "@nestjs/common";
import {WalService} from "./wal.service.js";

@Module({
    providers: [WalService]
})
export class WalModule {}