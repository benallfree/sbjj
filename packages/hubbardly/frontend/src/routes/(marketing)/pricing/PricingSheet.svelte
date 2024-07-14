<script lang="ts">
  import Fa from 'svelte-fa'
  import {
    faChampagneGlasses,
    faClockFour,
    faLock,
  } from '@fortawesome/free-solid-svg-icons'
  import { meta } from '$src/meta'
  import BlueCheck from './BlueCheck.svelte'
  import FounderBadge from './FounderBadge.svelte'
  import IconListItem from './IconListItem.svelte'
  import ListItem from './ListItem.svelte'

  function formatNumber(num: number): string {
    if (num < 1000) {
      return num.toString()
    } else if (num < 1_000_000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
    } else if (num < 1_000_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'm'
    } else {
      return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'b'
    }
  }
</script>

<div>
  <details class="collapse mb-4" open>
    <summary class="collapse-title text-xl font-medium bg-neutral w-96">
      <div class="flex justify-between gap-x-2 p-0 min-h-0 pb-0">
        <div>Free Forever</div>
        <button disabled class="btn btn-primary btn-xs">Join</button>
      </div>
    </summary>
    <div class="collapse-content" style="padding-bottom: 0px">
      <div class="text-error">
        <IconListItem icon={faLock}
          >Locked for {meta.prelaunchLabel}</IconListItem
        >
      </div>
      <div>Manage unlimited pantry items</div>
      <div>Join public communities</div>
      <div>Join premium communities</div>
      <div>Discover new recipes</div>
      <div>Create and share recipes</div>
    </div>
  </details>

  <details class="collapse mb-4" open>
    <summary class="collapse-title text-xl font-medium bg-neutral w-96">
      <div class="flex justify-between gap-x-2 p-0 min-h-0 pb-0">
        <ListItem>
          <BlueCheck />
          Blue
        </ListItem>
        <button disabled class="btn btn-primary btn-xs"
          ><Fa icon={faLock} />$19/mo Locked for {meta.prelaunchLabel}</button
        >
      </div></summary
    >
    <div class="collapse-content">
      <div>Create communities</div>
      <div>Join private communities</div>

      <ListItem>Stretch goals:</ListItem>
      <ListItem
        ><Fa class="text-info" icon={faChampagneGlasses} /> Research ingredient trends</ListItem
      >
      <ListItem
        ><Fa class="text-info" icon={faChampagneGlasses} /> AI-powered recipe suggestions</ListItem
      >
      <ListItem
        ><Fa class="text-info" icon={faChampagneGlasses} />Monetize your
        community</ListItem
      >
      <ListItem
        ><Fa class="text-info" icon={faChampagneGlasses} />Appoint community
        moderators</ListItem
      >
    </div>
  </details>

  <details class="collapse mb-4" open>
    <summary class="collapse-title text-xl font-medium bg-neutral w-96">
      <div class="flex justify-between gap-x-2 p-0 min-h-0 pb-0">
        <div class="flex items-center gap-x-2 p-0 min-h-0 pb-0">
          <FounderBadge />
          Founder's Edition
        </div>
        <a class="btn btn-primary btn-xs">$299 lifetime</a>
      </div></summary
    >
    <div class="collapse-content">
      <ListItem>
        <Fa icon={faClockFour} class="mt-1 mr-1" />
        <span
          class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black"
          >{formatNumber(500)}/{formatNumber(500)} Remaining</span
        >
      </ListItem>
      <div>Lifetime access to Hubbardly</div>
      <div>Founder's badge</div>
      <div>Private Founder's channel on Discord</div>
      <div>Early access to new features</div>
      <div>Vote on new features</div>
      <div>Founder's edition mug</div>
      <div></div>
    </div>
  </details>
</div>
