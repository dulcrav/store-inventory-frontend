export class Laptop {
    constructor(private id: number, private name: string, private producer: string,
        private display: number, private processor: string, private ram: number,
        private graphics: string, private hdd: number, private ssd: number, 
        private fingerprintScanner: boolean, private os: string, private quantity: number) {}
}