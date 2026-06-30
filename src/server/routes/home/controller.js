import {
  createHoldingService,
  createProfileService
} from '@livestock/ui-services'
import { config } from '#config/config.js'
import { statusSnapshot } from '@livestock/taxonomy-status'

export const homeController = {
  async handler(request, h) {
    const fetchUserProfile = createProfileService({ config })
    const fetchHoldingProfile = createHoldingService({ config })

    const snapshot = await statusSnapshot(
      request,
      'ctt',
      'cattle',
      fetchUserProfile,
      fetchHoldingProfile
    )

    return h.view('home/index', snapshot)
  }
}
