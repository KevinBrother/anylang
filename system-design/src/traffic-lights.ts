// 红 -> 黄 -> 绿

enum TLight {
  RED = '红灯',
  GREEN = '绿灯',
  YELLOW = '黄灯'
}

interface ILight {
  color: TLight;
  time: number;
  next(): ILight;
}

class Red implements ILight {
  color = TLight.RED;
  time = 2;
  next() {
    return new Yellow();
  }
}

class Yellow implements ILight {
  color = TLight.YELLOW;
  time = 1;
  next() {
    return new Green();
  }
}

class Green implements ILight {
  color = TLight.GREEN;
  time = 4;
  next() {
    return new Red();
  }
}

class TrafficLight {
  private state = new Red();
  private restTime = this.state.time;
  private timer: NodeJS.Timeout | null = null;

  start() {
    this.timer = setInterval(() => {
      console.log('current light: %s restTIme: %d', this.state.color, this.restTime);
      this.restTime -= 1;

      if (this.restTime < 0) {
        this.state = this.state.next();
        this.restTime = this.state.time;
      }
    }, 1000);
  }

  stop() {
    if(this.timer) {
      clearInterval(this.timer)
      this.timer = null;
    }
  }
}

const trafficLight = new TrafficLight();

trafficLight.start();

setTimeout(() => {
  trafficLight.stop()
}, 10000)

interface TrafficSystem {
  red: number;
  yellow: number;
  green: number;
}
