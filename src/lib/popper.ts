// https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement
import Popper from 'popper.js';

class Pop {
  private pop!: Popper | null;

  constructor(
    private reference: Element,
    private popper: Element,
    private placement: Popper.Placement = 'bottom-start',
  ) {
    this.crated();
  }

  public active(): void {
    if (!this.pop) {
      this.crated();
    } else {
      this.update();
    }
  }

  public destroy(): void {
    if (this.pop) {
      setTimeout(() => {
        if (this.pop) {
          this.pop.destroy();
          this.pop = null;
        }
      }, 300);
    }
  }

  private crated(): void {
    this.pop = new Popper(
      this.reference,
      this.popper,
      {
        placement: this.placement,
        modifiers: {
          computeStyle: {
            gpuAcceleration: false,
          },
          preventOverflow: {
            boundariesElement: 'window',
          },
        },
        onCreate: () => {
          this.update();
        },
      },
    );
  }

  private update(): void {
    if (this.pop) {
      if (this.pop.scheduleUpdate) {
        this.pop.scheduleUpdate();
      } else {
        this.pop.update();
      }
    }
  }
}

export default Pop;
