import { TabulaCmd } from './cmd'

(async () => {
  try {
    const content = await TabulaCmd('foo.pdf')
    console.log(content)
  } catch (e) {
    console.error(e)
  }
})()
