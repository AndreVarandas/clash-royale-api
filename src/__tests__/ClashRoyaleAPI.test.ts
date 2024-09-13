import { ClashRoyaleAPI } from '../'

describe('ClashRoyaleAPI', () => {
  const ClashRoyale = new ClashRoyaleAPI('sometoken')

  test('should have been successfully instantiated', () => {
    expect(ClashRoyale).toBeDefined()
  })
})
