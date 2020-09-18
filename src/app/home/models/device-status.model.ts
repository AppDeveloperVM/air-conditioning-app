export class DeviceStatus {
    constructor(
        public time: string,
        public temp: number,
        public mode: string,
        public fan: string
    ) {
        
    }
}