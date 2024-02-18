import '../src/config'

describe('Config', () => {
  test('Environment', async () => {
    expect(process.env['ENVIRONMENT']).toBe('development')
  })
})
