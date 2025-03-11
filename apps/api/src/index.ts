import { ability } from '@saas/auth'

const userCanInviteSomeoneElase = ability.can('invite', 'User')
const userCanDeleteOtherUser = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElase)
console.log(userCanDeleteOtherUser)
