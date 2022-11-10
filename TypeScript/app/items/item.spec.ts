import { expect } from 'chai';
import {Quality} from "@/items/Item";

describe('Item', () => {
  describe('when create a new Quality', () => {
    describe('and quality value is greater than 50', () => {
      it('should set 50 as a maximum value', () => {
        const quality = new Quality(51);
        expect(quality.getValue()).to.be.equal(Quality.MAX_VALUE);
      });
    });
    describe('and quality value is less than 0', () => {
      it('should set 0 as a minimum value', () => {
        const quality = new Quality(-1);
        expect(quality.getValue()).to.be.equal(Quality.MIN_VALUE);
      });
    });
    describe('and quality value is equal to 80', () => {
      it('should set 80 as a legendary item quality value', () => {
        const quality = new Quality(80);
        expect(quality.getValue()).to.be.equal(Quality.MAX_LEGENDARY_VALUE);
      });
    });
  });
  describe('when decrease the quality', () => {
    it('should never be less than 0', () => {
      const quality = new Quality(0);
      quality.decrease(1);

      expect(quality.getValue()).to.be.gte(0);
    });
  });

  describe('when increase the quality', () => {
    it('should never be greater than 50', () => {
      const quality = new Quality(50);
      quality.increase(1);

      expect(quality.getValue()).to.be.gte(50);
    });
  });
});
