import type { Timezone } from './timezone'
import { TzDate } from './date'

export const timezoned = (timezone: Timezone) => (value?: string | number | Date | undefined) => {
  if (typeof value === 'string') {
    return new TzDate(value, timezone)
  } else if (typeof value === 'number') {
    return new TzDate(value, timezone)
  } else if (value instanceof Date) {
    return new TzDate(value, timezone)
  } else {
    return new TzDate(timezone)
  }
}
