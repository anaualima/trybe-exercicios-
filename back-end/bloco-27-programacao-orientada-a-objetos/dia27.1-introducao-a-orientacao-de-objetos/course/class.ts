class TV {
    brand: string;
    size: number;
    resolution: string;
    connections:string[];
    connectedTo?: string
  
    constructor(b: string, s: number, r: string, c: string[]) {
      console.log(`Creating TV ${b}`);
      this.brand = b;
      this.size = s;
      this.resolution = r;
      this.connections = c
    }
  
    turnOf():void {
        console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \navailable connections: ${this.connections}`);
    }
  }
    
  const tv1 = new TV('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
  tv1.turnOf()
  
  