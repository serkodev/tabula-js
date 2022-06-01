import { spawn } from 'child_process'
import path from 'path'

export const TabulaCmd = (filePath: string, page = '1'): Promise<string> => {
  return new Promise((resolve, reject) => {
    let stdoutData = ''
    let stderrData = ''

    const tabula = spawn('java', [
      '-jar', path.join(__dirname, 'tabula.jar'),
      filePath,
      '-p', page,
    ])

    tabula.stdout.on('data', (data) => { stdoutData += data })
    tabula.stderr.on('data', (data) => { stderrData += data })

    tabula.on('close', (code) => {
      if (code === 0) {
        resolve(stdoutData)
      } else {
        reject(stderrData)
      }
    })
  })
}
