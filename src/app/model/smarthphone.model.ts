export class Smartphone {
    constructor(private id: number, private name: string, private producer: string,
        private display: number, private processor: string, private ram: string,
        private graphics: string, private memory: number, private cameraFront: number,
        private cameraBack: number, private battery: number, private fingerprintScanner: boolean,
        private os: string, private quantity: number) {}
}