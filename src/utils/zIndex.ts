class ZIndex {
  public zIndex: number;

  constructor() {
    this.zIndex = 3000;
  }

  public nextZIndex(): string {
    this.zIndex += 1;
    return this.zIndex + '';
  }
}

const zIndex = new ZIndex();

export default zIndex;
