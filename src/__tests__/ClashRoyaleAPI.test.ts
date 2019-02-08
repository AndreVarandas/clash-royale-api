import { ClashRoyaleAPI } from '../'
import * as library from '../index' // Workaround to spy on default function

describe('ClashRoyaleAPI', () => {
    const ClashRoyale = new ClashRoyaleAPI('sometoken');

    test('should have been successfully instantiated', () => {
        expect(ClashRoyale).toBeDefined()
    })
})
