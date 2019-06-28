import AsyncValidator from 'async-validator';

class Validate {
  constructor (params: any) {
    this.validate = new AsyncValidator(params);
  }
}

export default Validate
