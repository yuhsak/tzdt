const dayOfWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const m2h = (minutes: number, colon: boolean = false) => {
  const unit = minutes < 0 ? -1 : 1
  const min = minutes * unit
  const h = Math.floor(min / 60)
  const m = min - 60 * h
  return `${unit === -1 ? '-' : '+'}${String(h).padStart(2, '0')}${colon ? ':' : ''}${String(m).padStart(2, '0')}`
}

export const formatDate = (template: string) => (date: Date) =>
  template
    .replace(/\{yyyy\}/g, String(date.getFullYear()))
    .replace(/\{MM\}/g, String(date.getMonth() + 1).padStart(2, '0'))
    .replace(/\{dd\}/g, String(date.getDate()).padStart(2, '0'))
    .replace(/\{hh\}/g, String(date.getHours()).padStart(2, '0'))
    .replace(/\{mm\}/g, String(date.getMinutes()).padStart(2, '0'))
    .replace(/\{ss\}/g, String(date.getSeconds()).padStart(2, '0'))
    .replace(/\{mss\}/g, String(date.getMilliseconds()).padStart(3, '0'))
    .replace(/\{M\}/g, String(date.getMonth() + 1))
    .replace(/\{MO\}/g, months[date.getMonth()]!)
    .replace(/\{d\}/g, String(date.getDate()))
    .replace(/\{dow\}/g, dayOfWeeks[date.getDay()]!)
    .replace(/\{h\}/g, String(date.getHours()))
    .replace(/\{m\}/g, String(date.getMinutes()))
    .replace(/\{s\}/g, String(date.getSeconds()))
    .replace(/\{ms\}/g, String(date.getMilliseconds()))
    .replace(/\{tz\}/g, String(m2h(date.getTimezoneOffset(), true)))
    .replace(/\{tzc\}/g, String(m2h(date.getTimezoneOffset(), false)))

export const toDateString = formatDate('{dow} {MO} {dd} {yyyy}')
export const toTimeString = formatDate('{hh}:{mm}:{ss}')
export const toString = (date: Date) => formatDate(`${toDateString(date)} ${toTimeString(date)} GMT{tzc}`)(date)
export const toISOString = (date: Date) =>
  formatDate('{yyyy}-{MM}-{dd}T{hh}:{mm}:{ss}.{mss}{tz}')(date).replace(/\+00:00$/, 'Z')

export const m2ms = (minutes: number) => minutes * 60 * 1000

export const offset = (date: Date, offsetMs: number) => {
  const _date = new Date(date)
  _date.setTime(_date.getTime() + offsetMs)
  return _date
}

export const unoffset = (date: Date, offsetMs: number) => {
  const _date = new Date(date)
  _date.setTime(_date.getTime() - offsetMs)
  return _date
}
