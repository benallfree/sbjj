<script lang="ts">
  import AuthStateGuard from '$components/helpers/AuthStateGuard.svelte'
  import { DISCORD_URL } from '$src/env'
  import { client } from '$src/pocketbase-client'
  import FAQSection from '$src/routes/account/FAQSection.svelte'
  import PricingCard from '$src/routes/account/PricingCard.svelte'
  import { PLAN_NAMES, SubscriptionType } from '$util/defs'
  import { isUserLegacy, userStore, userSubscriptionType } from '$util/stores'
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  const founderMembershipsRemaining = writable(0)
  const flounderMembershipsRemaining = writable(0)

  onMount(async () => {
    try {
      {
        const membershipCount = await client()
          .client.collection('settings')
          .getFirstListItem(`name = 'founders-edition-count'`)
        founderMembershipsRemaining.set(Math.max(0, membershipCount.value))
      }
      {
        const membershipCount = await client()
          .client.collection('settings')
          .getFirstListItem(`name = 'flounders-edition-count'`)
        flounderMembershipsRemaining.set(Math.max(0, membershipCount.value))
      }
    } catch (e) {
      console.error(e)
    }
  })
</script>

<AuthStateGuard>
  <div class="">
    <main>
      <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h1 class="text-base font-semibold leading-7 text-primary">
            Pricing
          </h1>
          <p
            class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Plans for makers and founders
          </p>
        </div>

        <p
          class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300"
        >
          PocketHost is more than just a hosting platform. We are a vibrant
          community of makers, ready to help you bootstrap your next project or
          iterate on proof-of-concepts until you find your hit. With our free
          plan, you can start using PocketHost right away. But if you want to
          take your projects to the next level and support our community,
          consider upgrading to one of our paid plans. Our paid plans offer
          additional features and benefits that will supercharge your
          development process. Join our thriving community of makers, we are
          waiting for you in Discord!
        </p>

        <div
          class="mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {#if $isUserLegacy}
            <PricingCard
              name={PLAN_NAMES[SubscriptionType.Legacy]}
              description="Free forever. Use PocketHost for your next project and enjoy all the same features the paid tiers get."
              priceMonthly={[0]}
              priceAnnually={[0]}
              active={$userSubscriptionType === SubscriptionType.Legacy}
              features={[
                ['Existing projects'],
                ['Unlimited storage', '/usage/usage-limits'],
                ['Unlimited bandwidth', '/usage/usage-limits'],
                ['Unlimited CPU', '/usage/usage-limits'],
                ['FTP access', '/usage/ftp'],
                ['Run every version of PocketBase', '/usage/upgrading'],
                [
                  'Secure infrastructure',
                  '/overview/faq/#data-privacy-and-security',
                ],
                ['Community Discord', DISCORD_URL],
              ]}
            />
          {:else}
            <PricingCard
              name={PLAN_NAMES[SubscriptionType.Free]}
              description="Free forever. Use PocketHost for your next project and enjoy all the same features the paid tiers get."
              priceMonthly={[0, 'free']}
              priceAnnually={[0, 'free']}
              active={$userSubscriptionType === SubscriptionType.Free}
              features={[
                ['1 project'],
                ['Unlimited storage', '/usage/usage-limits'],
                ['Unlimited bandwidth', '/usage/usage-limits'],
                ['Unlimited CPU', '/usage/usage-limits'],
                ['FTP access', '/usage/ftp'],
                ['Run every version of PocketBase', '/usage/upgrading'],
                [
                  'Secure infrastructure',
                  '/overview/faq/#data-privacy-and-security',
                ],
                ['Community Discord', DISCORD_URL],
              ]}
            />
          {/if}

          <PricingCard
            name={PLAN_NAMES[SubscriptionType.Premium]}
            description="Want all your PocketHost projects in one place? That's what the Pro tier is all about."
            priceAnnually={[240, 'billed annually']}
            checkoutMonthURL="https://store.pockethost.io/checkout/buy/8e7cfb35-846a-4fd6-adcb-c2db5589275d?checkout[custom][user_id]={$userStore?.id}"
            checkoutYearURL="https://store.pockethost.io/checkout/buy/96e4ab4b-f646-4fb2-b830-5584db983e73?checkout[custom][user_id]={$userStore?.id}"
            active={$userSubscriptionType === SubscriptionType.Premium}
            features={[
              ['Everything in Free/Legacy, plus...'],
              [`Custom domains`, `/usage/custom-domain`],
              ['Unlimited projects', '/usage/usage-limits'],
              ['Priority Discord'],
            ]}
          />

          <PricingCard
            name={`${PLAN_NAMES[SubscriptionType.Founder]}`}
            qtyRemaining={founderMembershipsRemaining}
            qtyMax={100}
            description="Super elite! The Founder's Edition is our way of saying thanks for supporting PocketHost in these early days. Choose between lifetime and annual options."
            priceMonthly={[299, 'once, use forever']}
            priceAnnually={[99, 'year (save 55%)']}
            checkoutMonthURL="https://store.pockethost.io/checkout/buy/e71cbfb5-cec3-4745-97a7-d877f6776503?checkout[custom][user_id]={$userStore?.id}"
            checkoutYearURL="https://store.pockethost.io/checkout/buy/e5660329-5b99-4ed6-8f36-0d387803e1d6?checkout[custom][user_id]={$userStore?.id}"
            active={$userSubscriptionType === SubscriptionType.Founder}
            features={[
              ['Everything in Pro, plus...'],
              [`Founder's Discord`],
              [`Ultra elite Founder's Mug`],
            ]}
          />

          <PricingCard
            name={`${PLAN_NAMES[SubscriptionType.Flounder]}`}
            qtyRemaining={flounderMembershipsRemaining}
            qtyMax={1000}
            description="Meta elite! If you missed the Founder's round, this one is for you. For this round, we stole Andrew Tate's war room and turned it into a maker's inner circle where you can get coaching on your POC and potentially qualify for PocketHost Partnership where we'll invest in your project. This alone is worth the money. This is new for the fLounders, and you have to be a fLounder to get the coaching."
            priceMonthly={[349, 'once, use forever + coaching']}
            checkoutMonthURL="https://store.pockethost.io/checkout/buy/e71cbfb5-cec3-4745-97a7-d877f6776503?checkout[custom][user_id]={$userStore?.id}"
            checkoutYearURL="https://store.pockethost.io/checkout/buy/e5660329-5b99-4ed6-8f36-0d387803e1d6?checkout[custom][user_id]={$userStore?.id}"
            active={$userSubscriptionType === SubscriptionType.Flounder}
            features={[
              ['Everything in Pro, plus...'],
              [`fLounder's Discord`],
              [
                `1 hour of 1:1 coaching on Discord with cap'n #0[|<[-7 |>0$7`,
                '../coaching',
              ],
            ]}
          />
        </div>
      </div>

      <FAQSection />
    </main>
  </div>
</AuthStateGuard>
