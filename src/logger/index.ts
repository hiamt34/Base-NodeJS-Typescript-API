import logger from "pino";
import dayjs from "dayjs";

const log = logger({
    prettyPrint: {
        colorize: true,
        levelFirst: true,
        translateTime: 'yyyy-dd-mm, h:MM:ss TT',
    },
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
})

export default log;