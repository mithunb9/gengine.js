/**
 * Clamps the value based on the minimum and maximum value
 * @param {Number} val
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} clamped value
 */
export const clamp = (val, min, max) => {
  if (val < min) {
    return min;
  } else if (val > max) {
    return max;
  } else {
    return val;
  }
};

/**
 * Clamper class that handles repeated clamp operations.
 * @param {Number} min
 * @param {Number} max
 */
export class Clamper {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  /**
   * Clamps value based on the defined minimum and maximum values
   * @param {Number} val
   * @returns {Number} clamped value
   */
  clamp(val) {
    if (val < this.min) {
      return this.min;
    } else if (val > this.max) {
      return this.max;
    } else {
      return val;
    }
  }

  /**
   * gets the minimum value of the clamp
   * @returns {Number} minimum
   */
  getMin() {
    return this.min;
  }

  /**
   * gets the maximum value of the clamp
   * @returns {Number} maximum
   */
  getMax() {
    return this.max;
  }

  /**
   * Updates the minimum value of the clamp
   * @param {Number} newMin
   */
  updateMin(newMin) {
    this.min = newMin;
  }

  /**
   * Updates the maximum value of the clamp
   * @param {Number} newMax
   */
  updateMax(newMax) {
    this.min = newMax;
  }
}
