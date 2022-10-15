import {expose} from "comlink";
import {runTask} from "./utils"

const worker = {
    runTaskWorker: runTask
}

export type BigTaskWorker = typeof worker

expose(worker)
