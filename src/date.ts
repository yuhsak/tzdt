import { timezone, isTimezone } from './timezone'
import type { Timezone } from './timezone'

import { m2ms, toTimeString, toDateString, toString, toISOString, offset, unoffset } from './util'

export class TzDate extends Date {
  protected offsetDate: Date
  protected timezoneOffset: number

  constructor()
  constructor(date: TzDate, timezoneOffset?: number)
  constructor(date: TzDate, timezone?: Timezone)
  constructor(date: Date, timezoneOffset?: number)
  constructor(date: Date, timezone?: Timezone)
  constructor(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number,
  )
  constructor(timezone: Timezone)
  constructor(dateString: string, timezoneOffset?: number)
  constructor(dateString: string, timezone?: Timezone)
  constructor(unixtime: number, timezone?: Timezone)
  constructor(
    date?: number | string | Date | TzDate | Timezone,
    tzOrMonth?: number | Timezone,
    dt?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number,
  ) {
    if (date instanceof TzDate || date instanceof Date) {
      super(date)
    } else if (typeof date === 'string') {
      if (isTimezone(date)) {
        super()
      } else {
        super(date)
      }
    } else if (typeof date === 'number') {
      if (typeof tzOrMonth === 'number') {
        super()
        super.setUTCFullYear(date)
        super.setUTCMonth(tzOrMonth)
        if (typeof dt === 'number') {
          super.setUTCDate(dt)
        }
        if (typeof hours === 'number') {
          super.setUTCHours(hours)
        }
        if (typeof minutes === 'number') {
          super.setUTCMinutes(minutes)
        }
        if (typeof seconds === 'number') {
          super.setUTCSeconds(seconds)
        }
        if (typeof ms === 'number') {
          super.setUTCMilliseconds(ms)
        }
      } else {
        super(date)
      }
    } else {
      super()
    }

    if (date instanceof TzDate && typeof tzOrMonth === 'undefined') {
      this.offsetDate = date.offsetDate
    } else {
      this.offsetDate = new Date(this)
    }

    if (date instanceof TzDate) {
      if (typeof tzOrMonth === 'undefined') {
        this.timezoneOffset = date.timezoneOffset
      } else {
        this.timezoneOffset =
          typeof tzOrMonth === 'number' ? tzOrMonth : isTimezone(tzOrMonth) ? timezone[tzOrMonth] : 0
      }
    } else if (date instanceof Date) {
      this.timezoneOffset =
        typeof tzOrMonth === 'number'
          ? tzOrMonth
          : typeof tzOrMonth === 'string' && isTimezone(tzOrMonth)
          ? timezone[tzOrMonth]
          : 0
    } else if (typeof date === 'string') {
      this.timezoneOffset = isTimezone(date)
        ? timezone[date]
        : typeof tzOrMonth === 'number'
        ? tzOrMonth
        : typeof tzOrMonth === 'string' && isTimezone(tzOrMonth)
        ? timezone[tzOrMonth]
        : 0
    } else if (typeof date === 'number' && typeof tzOrMonth === 'string' && isTimezone(tzOrMonth)) {
      this.timezoneOffset = timezone[tzOrMonth]
    } else {
      this.timezoneOffset = 0
    }

    if (!(date instanceof TzDate) || typeof tzOrMonth !== 'undefined') {
      this.setTimezoneOffset(this.timezoneOffset)
    }
  }

  public getTimezoneOffset() {
    return this.timezoneOffset
  }

  public getTimezoneOffsetMs() {
    return m2ms(this.timezoneOffset)
  }

  public setTimezoneOffset(offsetMinutesOrTimezone: number | Timezone) {
    this.timezoneOffset =
      typeof offsetMinutesOrTimezone === 'number' ? offsetMinutesOrTimezone : timezone[offsetMinutesOrTimezone]
    this.offsetDate = offset(this, this.getTimezoneOffsetMs())
    return this.getTime()
  }

  public getFullYear() {
    return this.offsetDate.getUTCFullYear()
  }

  public getMonth() {
    return this.offsetDate.getUTCMonth()
  }

  public getHours() {
    return this.offsetDate.getUTCHours()
  }

  public getMinutes() {
    return this.offsetDate.getUTCMinutes()
  }

  public getDate() {
    return this.offsetDate.getUTCDate()
  }

  public getDay() {
    return this.offsetDate.getUTCDay()
  }

  public getSeconds() {
    return this.offsetDate.getUTCSeconds()
  }

  public getMilliseconds() {
    return this.offsetDate.getUTCMilliseconds()
  }

  public getTime() {
    return unoffset(this.offsetDate, this.getTimezoneOffsetMs()).getTime()
  }

  public getUTCFullYear() {
    return super.getUTCFullYear()
  }

  public getUTCMonth() {
    return super.getUTCMonth()
  }

  public getUTCDate() {
    return super.getUTCDate()
  }

  public getUTCDay() {
    return super.getUTCDay()
  }

  public getUTCHours() {
    return super.getUTCHours()
  }

  public getUTCMinutes() {
    return super.getUTCMinutes()
  }

  public getUTCSeconds() {
    return super.getUTCSeconds()
  }

  public getUTCMilliseconds() {
    return super.getUTCMilliseconds()
  }

  public setFullYear(year: number, month?: number, date?: number) {
    this.offsetDate.setUTCFullYear(
      year,
      typeof month === 'number' ? month : this.offsetDate.getUTCMonth(),
      typeof date === 'number' ? date : this.offsetDate.getUTCDate(),
    )
    const time = this.getTime()
    super.setTime(time)
    return time
  }

  public setMonth(month: number, date?: number) {
    this.offsetDate.setUTCMonth(month, typeof date === 'number' ? date : this.offsetDate.getUTCDate())
    const time = this.getTime()
    super.setTime(time)
    return time
  }

  public setDate(date: number) {
    this.offsetDate.setUTCDate(date)
    const time = this.getTime()
    super.setTime(time)
    return time
  }

  public setHours(hours: number, minutes?: number, seconds?: number, ms?: number) {
    this.offsetDate.setUTCHours(
      hours,
      typeof minutes === 'number' ? minutes : this.offsetDate.getUTCMinutes(),
      typeof seconds === 'number' ? seconds : this.offsetDate.getUTCSeconds(),
      typeof ms === 'number' ? ms : this.offsetDate.getUTCMilliseconds(),
    )
    const time = this.getTime()
    super.setTime(time)
    return time
  }

  public setMinutes(minutes: number, seconds?: number, ms?: number) {
    this.offsetDate.setUTCMinutes(
      minutes,
      typeof seconds === 'number' ? seconds : this.offsetDate.getUTCSeconds(),
      typeof ms === 'number' ? ms : this.offsetDate.getUTCMilliseconds(),
    )
    const time = this.getTime()
    super.setTime(time)
    return time
  }

  public setSeconds(seconds: number, ms?: number) {
    this.offsetDate.setUTCSeconds(seconds, typeof ms === 'number' ? ms : this.offsetDate.getUTCMilliseconds())
    const time = this.getTime()
    super.setTime(time)
    return time
  }

  public setMilliseconds(ms: number) {
    this.offsetDate.setUTCMilliseconds(ms)
    const time = this.getTime()
    super.setTime(time)
    return time
  }

  public setTime(time: number) {
    super.setTime(time)
    this.offsetDate = offset(this, this.getTimezoneOffsetMs())
    return this.getTime()
  }

  public setUTCFullYear(year: number, month?: number, date?: number) {
    super.setUTCFullYear(
      year,
      typeof month === 'number' ? month : this.offsetDate.getUTCMonth(),
      typeof date === 'number' ? date : this.offsetDate.getUTCDate(),
    )
    this.offsetDate = offset(this, this.getTimezoneOffsetMs())
    return this.getTime()
  }

  public setUTCMonth(month: number, date?: number) {
    super.setUTCMonth(month, typeof date === 'number' ? date : this.offsetDate.getUTCDate())
    this.offsetDate = offset(this, this.getTimezoneOffsetMs())
    return this.getTime()
  }

  public setUTCDate(date: number) {
    super.setUTCDate(date)
    this.offsetDate = offset(this, this.getTimezoneOffsetMs())
    return this.getTime()
  }

  public setUTCHours(hours: number, minutes?: number, seconds?: number, ms?: number) {
    super.setUTCHours(
      hours,
      typeof minutes === 'number' ? minutes : this.offsetDate.getUTCMinutes(),
      typeof seconds === 'number' ? seconds : this.offsetDate.getUTCSeconds(),
      typeof ms === 'number' ? ms : this.offsetDate.getUTCMilliseconds(),
    )
    this.offsetDate = offset(this, this.getTimezoneOffsetMs())
    return this.getTime()
  }

  public setUTCMinutes(minutes: number, seconds?: number, ms?: number) {
    super.setUTCMinutes(
      minutes,
      typeof seconds === 'number' ? seconds : this.offsetDate.getUTCSeconds(),
      typeof ms === 'number' ? ms : this.offsetDate.getUTCMilliseconds(),
    )
    this.offsetDate = offset(this, this.getTimezoneOffsetMs())
    return this.getTime()
  }

  public setUTCSeconds(seconds: number, ms?: number) {
    super.setUTCSeconds(seconds, typeof ms === 'number' ? ms : this.offsetDate.getUTCMilliseconds())
    this.offsetDate = offset(this, this.getTimezoneOffsetMs())
    return this.getTime()
  }

  public setUTCMilliseconds(ms: number) {
    super.setUTCMilliseconds(ms)
    this.offsetDate = offset(this, this.getTimezoneOffsetMs())
    return this.getTime()
  }

  public toTimeString(): string {
    return toTimeString(this)
  }

  public toDateString(): string {
    return toDateString(this)
  }

  public toString(): string {
    return toString(this)
  }

  public toISOString(): string {
    return toISOString(this)
  }

  public toJSON(): string {
    return this.toISOString()
  }
}
