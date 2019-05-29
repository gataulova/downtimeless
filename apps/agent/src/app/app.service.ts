import { Injectable } from "@nestjs/common";
import * as os from "os";
import * as diskusage from "diskusage";

@Injectable()
export class AppService {
  async getData() {
    const disk = await this.getDisk();

    return {
      ...this.getCpus(),
      ...this.getMemory(),
      ...this.getUptime(),
      ...disk
    };
  }

  getMemory() {
    return {
      free: os.freemem(),
      total: os.totalmem()
    };
  }

  getCpus() {
    return { cpus: os.cpus(), load: os.loadavg() };
  }

  getUptime() {
    return {
      uptime: os.uptime()
    };
  }

  async getDisk() {
    return {
      disk: await diskusage.check("/")
    };
  }
}
