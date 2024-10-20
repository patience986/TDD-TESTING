
const { expect } = import('chai');
const multiply = import('../multiply');

describe('Multiply Function', () => {
  it('should return 1 when multiplying 1 and 1', () => {
    expect(multiply(1, 1)).to.equal(1);
  });
});

//next test

it('should return 9 when multiplying 3 and 3', () => {
    expect(multiply(3, 3)).to.equal(9);
  });

  //fourth test
  it('should return 16 when multiplying 4 and 4', () => {
    expect(multiply(4, 4)).to.equal(16);
  });
  

  //fifth test
  it('should return 1035 when multiplying 23 and 45', () => {
  expect(multiply(23, 45)).to.equal(23 * 45);
});

  
