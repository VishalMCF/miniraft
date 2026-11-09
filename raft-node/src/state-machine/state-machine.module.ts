import {Module} from "@nestjs/common";
import {StateMachineController} from "./state-machine.controller.js";
import {StateMachineService} from "./state-machine.service.js";

@Module({
    controllers: [StateMachineController],
    providers: [StateMachineService]
})
export class StateMachineModule {}