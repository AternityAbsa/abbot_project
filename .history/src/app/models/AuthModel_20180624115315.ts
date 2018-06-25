import * as models from '../models/models';

export class AuthModel  {

    /** Host Resources */
    CPU_UTILIZATION_AVG : number;
    DISK_IO_READ_AVG : number;
    DISK_IO_WRITE_AVG : number;
    DISK_QUEUE_LENGTH_MAX : number;
    HOUR_RUNNING_TOTAL : number;
    NETWORK_READ_AVG : number;
    NETWORK_WRITE_AVG : number;
    PHYSICAL_MEMORY_UTIL_AVG : number;
    SERVING_DEVICE_NAME : string;
    TIMEFRAME : Date;
    VIRTUAL_MEMORY_UTIL_AVG : number;
    USERNAME : string;
    ACCOUNT_NAME : string;

    /** Device Inventory */
    AGENT_CURRENT_STATUS : string;
    LAST_REPORTING_DATETIME : number;
    MICROSOFT_STABILITY_INDEX : number;
    DEVICE_CPU_GENERATION : number;
    DEVICE_CPU_CORES = [];
    AGENT_VERSION : number;

    /** Application Raw */
    UXI : number[] = [];
    UXI_WEIGHT: number;
    ACTIVITY_VOLUME: number;
    CRASHES: number[];
    HANG_TIME: number[];
    PERFORMANCE_INDEX: number[];
    PERFORMANCE_WEIGHT: number[];
    APPLICATION: string[] = [];
    MACHINE_NAMES: string[] = [];
    ACTIVE_TIME: any = [];
    ACTIVITY_SCORE : number[] = [];
    ACTIVITY_RESPONSE_AVG : number[] = [];
    WAIT_TIME : number[] = [];

    /** Best and Worst users */

    ACTIVITY : string;
    BEST_APPLICATION : string;
    CLIENT_TIME : number;
    MEASUREMENT_TIME : number;
    PAGE_RESPONSE_TIME : number;
    PAGE_PROCESSING_TIME : number;
    BEST_USERNAME : string;
    DEVICE_MODEL : string;

    set = new Set ([]);
    data1 : Element[] = [];

}

