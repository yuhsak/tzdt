import { TzDate } from '../src/date'
import '../src/timezones/Asia/Tokyo'
import '../src/timezones/UTC'

const date = new Date('2021-12-31T15:00:00Z')

describe('constructor', () => {
  test('works if it gives undefined', () => {
    const dt = new TzDate()
    expect(dt).toBeInstanceOf(TzDate)
  })

  test('works if it gives a Date instance', () => {
    const dt = new TzDate(date)
    expect(dt).toBeInstanceOf(TzDate)
    expect(dt.getFullYear()).toBe(2021)
    expect(dt.getMonth()).toBe(11)
    expect(dt.getDate()).toBe(31)
    expect(dt.getHours()).toBe(15)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    expect(dt.getUTCFullYear()).toBe(2021)
    expect(dt.getUTCMonth()).toBe(11)
    expect(dt.getUTCDate()).toBe(31)
    expect(dt.getUTCHours()).toBe(15)
    expect(dt.getUTCMinutes()).toBe(0)
    expect(dt.getUTCSeconds()).toBe(0)
    expect(dt.getUTCMilliseconds()).toBe(0)
  })

  test('works if it gives a Date instance with timezone string', () => {
    const dt = new TzDate(date, 'Asia/Tokyo')
    expect(dt).toBeInstanceOf(TzDate)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(0)
    expect(dt.getDate()).toBe(1)
    expect(dt.getHours()).toBe(0)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    expect(dt.getUTCFullYear()).toBe(2021)
    expect(dt.getUTCMonth()).toBe(11)
    expect(dt.getUTCDate()).toBe(31)
    expect(dt.getUTCHours()).toBe(15)
    expect(dt.getUTCMinutes()).toBe(0)
    expect(dt.getUTCSeconds()).toBe(0)
    expect(dt.getUTCMilliseconds()).toBe(0)
  })

  test('works if it gives a Date instance with timezone offset minutes', () => {
    const dt = new TzDate(date, 540)
    expect(dt).toBeInstanceOf(TzDate)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(0)
    expect(dt.getDate()).toBe(1)
    expect(dt.getHours()).toBe(0)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    expect(dt.getUTCFullYear()).toBe(2021)
    expect(dt.getUTCMonth()).toBe(11)
    expect(dt.getUTCDate()).toBe(31)
    expect(dt.getUTCHours()).toBe(15)
    expect(dt.getUTCMinutes()).toBe(0)
    expect(dt.getUTCSeconds()).toBe(0)
    expect(dt.getUTCMilliseconds()).toBe(0)
  })

  test('works if it gives a date string', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z')
    expect(dt).toBeInstanceOf(TzDate)
    expect(dt.getFullYear()).toBe(2021)
    expect(dt.getMonth()).toBe(11)
    expect(dt.getDate()).toBe(31)
    expect(dt.getHours()).toBe(15)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    expect(dt.getUTCFullYear()).toBe(2021)
    expect(dt.getUTCMonth()).toBe(11)
    expect(dt.getUTCDate()).toBe(31)
    expect(dt.getUTCHours()).toBe(15)
    expect(dt.getUTCMinutes()).toBe(0)
    expect(dt.getUTCSeconds()).toBe(0)
    expect(dt.getUTCMilliseconds()).toBe(0)
  })

  test('works if it gives a date string with timezone string', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 'Asia/Tokyo')
    expect(dt).toBeInstanceOf(TzDate)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(0)
    expect(dt.getDate()).toBe(1)
    expect(dt.getHours()).toBe(0)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    expect(dt.getUTCFullYear()).toBe(2021)
    expect(dt.getUTCMonth()).toBe(11)
    expect(dt.getUTCDate()).toBe(31)
    expect(dt.getUTCHours()).toBe(15)
    expect(dt.getUTCMinutes()).toBe(0)
    expect(dt.getUTCSeconds()).toBe(0)
    expect(dt.getUTCMilliseconds()).toBe(0)
  })

  test('works if it gives a date string with timezone offset minutes', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 540)
    expect(dt).toBeInstanceOf(TzDate)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(0)
    expect(dt.getDate()).toBe(1)
    expect(dt.getHours()).toBe(0)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    expect(dt.getUTCFullYear()).toBe(2021)
    expect(dt.getUTCMonth()).toBe(11)
    expect(dt.getUTCDate()).toBe(31)
    expect(dt.getUTCHours()).toBe(15)
    expect(dt.getUTCMinutes()).toBe(0)
    expect(dt.getUTCSeconds()).toBe(0)
    expect(dt.getUTCMilliseconds()).toBe(0)
  })

  test('works if it gives a unix timestamp', () => {
    const dt = new TzDate(1600000000000)
    expect(dt).toBeInstanceOf(TzDate)
    expect(dt.getFullYear()).toBe(2020)
    expect(dt.getMonth()).toBe(8)
    expect(dt.getDate()).toBe(13)
    expect(dt.getHours()).toBe(12)
    expect(dt.getMinutes()).toBe(26)
    expect(dt.getSeconds()).toBe(40)
    expect(dt.getMilliseconds()).toBe(0)
    expect(dt.getUTCFullYear()).toBe(2020)
    expect(dt.getUTCMonth()).toBe(8)
    expect(dt.getUTCDate()).toBe(13)
    expect(dt.getUTCHours()).toBe(12)
    expect(dt.getUTCMinutes()).toBe(26)
    expect(dt.getUTCSeconds()).toBe(40)
    expect(dt.getUTCMilliseconds()).toBe(0)
  })

  test('works if it gives year, month, date, hours, minutes, seconds, ms', () => {
    const dt = new TzDate(2021, 11, 31, 15, 0, 0, 0)
    expect(dt).toBeInstanceOf(TzDate)
    expect(dt.getFullYear()).toBe(2021)
    expect(dt.getMonth()).toBe(11)
    expect(dt.getDate()).toBe(31)
    expect(dt.getHours()).toBe(15)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    expect(dt.getUTCFullYear()).toBe(2021)
    expect(dt.getUTCMonth()).toBe(11)
    expect(dt.getUTCDate()).toBe(31)
    expect(dt.getUTCHours()).toBe(15)
    expect(dt.getUTCMinutes()).toBe(0)
    expect(dt.getUTCSeconds()).toBe(0)
    expect(dt.getUTCMilliseconds()).toBe(0)
  })

  test('works if it gives a TzDate instance', () => {
    const dt1 = new TzDate('2021-12-31T15:00:00Z', 540)
    const dt2 = new TzDate(dt1)
    expect(dt2).toBeInstanceOf(TzDate)
    expect(dt2.getFullYear()).toBe(2022)
    expect(dt2.getMonth()).toBe(0)
    expect(dt2.getDate()).toBe(1)
    expect(dt2.getHours()).toBe(0)
    expect(dt2.getMinutes()).toBe(0)
    expect(dt2.getSeconds()).toBe(0)
    expect(dt2.getMilliseconds()).toBe(0)
    expect(dt2.getUTCFullYear()).toBe(2021)
    expect(dt2.getUTCMonth()).toBe(11)
    expect(dt2.getUTCDate()).toBe(31)
    expect(dt2.getUTCHours()).toBe(15)
    expect(dt2.getUTCMinutes()).toBe(0)
    expect(dt2.getUTCSeconds()).toBe(0)
    expect(dt2.getUTCMilliseconds()).toBe(0)
  })
})

describe('set*', () => {
  test('setTimezoneOffset', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 540)
    expect(dt.getFullYear()).toBe(2022)
    dt.setTimezoneOffset('UTC')
    expect(dt.getFullYear()).toBe(2021)
  })

  test('setFullYear', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 540)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(0)
    expect(dt.getDate()).toBe(1)
    dt.setFullYear(2021)
    expect(dt.getFullYear()).toBe(2021)
    expect(dt.getMonth()).toBe(0)
    expect(dt.getDate()).toBe(1)
    dt.setFullYear(2022, 1)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(1)
    expect(dt.getDate()).toBe(1)
    dt.setFullYear(2023, 2, 2)
    expect(dt.getFullYear()).toBe(2023)
    expect(dt.getMonth()).toBe(2)
    expect(dt.getDate()).toBe(2)
  })

  test('setMonth', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 540)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(0)
    expect(dt.getDate()).toBe(1)
    dt.setMonth(1)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(1)
    expect(dt.getDate()).toBe(1)
    dt.setMonth(2, 2)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(2)
    expect(dt.getDate()).toBe(2)
  })

  test('setDate', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 540)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(0)
    expect(dt.getDate()).toBe(1)
    dt.setDate(2)
    expect(dt.getFullYear()).toBe(2022)
    expect(dt.getMonth()).toBe(0)
    expect(dt.getDate()).toBe(2)
    dt.setDate(dt.getDate() + 30)
    expect(dt.getMonth()).toBe(1)
    expect(dt.getDate()).toBe(1)
  })

  test('setHours', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 540)
    expect(dt.getHours()).toBe(0)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setHours(1)
    expect(dt.getHours()).toBe(1)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setHours(2, 1)
    expect(dt.getHours()).toBe(2)
    expect(dt.getMinutes()).toBe(1)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setHours(3, 2, 1)
    expect(dt.getHours()).toBe(3)
    expect(dt.getMinutes()).toBe(2)
    expect(dt.getSeconds()).toBe(1)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setHours(4, 3, 2, 1)
    expect(dt.getHours()).toBe(4)
    expect(dt.getMinutes()).toBe(3)
    expect(dt.getSeconds()).toBe(2)
    expect(dt.getMilliseconds()).toBe(1)
  })

  test('setMinutes', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 540)
    expect(dt.getMinutes()).toBe(0)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setMinutes(1)
    expect(dt.getMinutes()).toBe(1)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setMinutes(2, 1)
    expect(dt.getMinutes()).toBe(2)
    expect(dt.getSeconds()).toBe(1)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setMinutes(3, 2, 1)
    expect(dt.getMinutes()).toBe(3)
    expect(dt.getSeconds()).toBe(2)
    expect(dt.getMilliseconds()).toBe(1)
  })

  test('setSeconds', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 540)
    expect(dt.getSeconds()).toBe(0)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setSeconds(1)
    expect(dt.getSeconds()).toBe(1)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setSeconds(2, 1)
    expect(dt.getSeconds()).toBe(2)
    expect(dt.getMilliseconds()).toBe(1)
  })

  test('setMilliseconds', () => {
    const dt = new TzDate('2021-12-31T15:00:00Z', 540)
    expect(dt.getMilliseconds()).toBe(0)
    dt.setMilliseconds(1)
    expect(dt.getMilliseconds()).toBe(1)
  })
})
