import { m2h, m2ms, formatDate, toDateString, toTimeString, toString, offset, unoffset } from '../src/util'
import { TzDate } from '../src/date'
const date = new Date('2021-01-02T03:04:05.067Z')
const tzdate = new TzDate(date)

describe('m2h', () => {
  test('works if it gives positive minutes', () => {
    expect(m2h(570)).toBe('+0930')
  })
  test('works if it gives negative minutes', () => {
    expect(m2h(-570)).toBe('-0930')
  })
})

describe('m2ms', () => {
  test('works', () => {
    expect(m2ms(30)).toBe(30 * 60 * 1000)
  })
})

describe('formatDate', () => {
  test('works', () => {
    expect(formatDate('{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}.{mss}')(tzdate)).toBe('2021-01-02 03:04:05.067')
    expect(formatDate('{M}-{d} {h}:{m}:{s}.{ms} {dow} {MO}')(tzdate)).toBe('1-2 3:4:5.67 Sat Jan')
  })
})

describe('toDateString', () => {
  test('works', () => {
    expect(toDateString(tzdate)).toBe('Sat Jan 02 2021')
  })
})

describe('toTimeString', () => {
  test('works', () => {
    expect(toTimeString(tzdate)).toBe('03:04:05')
  })
})

describe('toString', () => {
  test('works', () => {
    expect(toString(tzdate)).toBe('Sat Jan 02 2021 03:04:05 GMT+0000')
  })
})

describe('offset', () => {
  test('works', () => {
    expect(offset(date, 1000).getTime()).toBe(date.getTime() + 1000)
  })
})

describe('unoffset', () => {
  test('works', () => {
    expect(unoffset(date, 1000).getTime()).toBe(date.getTime() - 1000)
  })
})
