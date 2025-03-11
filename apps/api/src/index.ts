import { defineAbilitiesFor } from '@saas/auth'

const ability = defineAbilitiesFor({ role: 'MEMBER' })

const userCanInviteSomeoneElase = ability.can('invite', 'User')
const userCanDeleteOtherUser = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElase)
console.log(userCanDeleteOtherUser)
