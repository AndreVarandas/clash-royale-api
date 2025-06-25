import { ClashRoyaleAPI } from '../'

describe('ClashRoyaleAPI', () => {
  const ClashRoyale = new ClashRoyaleAPI('sometoken')

  test('should have been successfully instantiated', () => {
    expect(ClashRoyale).toBeDefined()
  })

  test('should have leaderboard methods', () => {
    expect(ClashRoyale.getLeaderboards).toBeDefined()
    expect(ClashRoyale.getLeaderboardById).toBeDefined()
  })
})
