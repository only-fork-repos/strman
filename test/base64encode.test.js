import base64encode from '../src/base64encode'

describe('strman.base64encode', () => {
  test('should be a string encoded', () => {
    expect(base64encode('Daniel')).toBe('RGFuaWVs')
    expect(base64encode('foo')).toBe('Zm9v')
    expect(base64encode('bar')).toBe('YmFy')
    expect(base64encode('bár!')).toBe('YsOhciE=')
    expect(base64encode('漢')).toBe('5ryi')
  })
})
