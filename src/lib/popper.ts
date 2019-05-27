// https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement
import Popper from 'popper.js';

class Pop {
  constructor(
    private reference: Element,
    private popper: Element,
    private placement: Popper.Placement = 'bottom-start',
    private pop: Popper | null,
  ) {
    this.crated();
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

  private active(): void {
    if (!this.pop) {
      this.crated();
    } else {
      this.update();
    }
  }

  private destroy(): void {
    if (this.pop) {
      setTimeout(() => {
        if (this.pop) {
          this.pop.destroy();
          this.pop = null;
        }
      }, 300);
    }
  }
}

export default Pop;
