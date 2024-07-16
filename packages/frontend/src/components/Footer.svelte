<script>
  import { meta } from '$src/meta'
  import Fa from 'svelte-fa'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<footer
  class="footer bg-neutral text-neutral-content p-10 mt-10 flex flex-col md:flex-row"
>
  <nav>
    <h6 class="footer-title">Site</h6>
    <a href="/pricing" class="link link-hover">Pricing</a>
    <a href="/support" class="link link-hover">Support</a>
    <a href="/creators" class="link link-hover">Creators</a>
  </nav>
  <nav>
    <h6 class="footer-title">{meta.prelaunchLabel}</h6>
    <a href="/kickstart-for-users" class="link link-hover">For Users</a>
    <a href="/kickstart-for-creators" class="link link-hover">For Creators</a>
  </nav>
  <nav>
    <h6 class="footer-title">Legal</h6>
    <a href="/tos" class="link link-hover">Terms of Service</a>
    <a href="/privacy" class="link link-hover">Privacy</a>
    <a href="/cookie" class="link link-hover">Cookies</a>
    <a href="/affiliates" class="link link-hover">Affiliates</a>
    <a href="/cancel" class="link link-hover">Canceling and Refunds</a>
  </nav>
  <nav>
    <h6 class="footer-title">Community</h6>
    <a href="https://github.com/benallfree" class="link link-hover"
      ><span><Fa icon={faGithub} class="inline-block" /> Github</span></a
    >
    <a href="/oss" class="link link-hover">Open Source Statement</a>
  </nav>
</footer>
