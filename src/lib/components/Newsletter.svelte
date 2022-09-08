<style>
  .mailchimp-style {
    position: absolute;
    left: -5000px;
  }
</style>

<script>
  import ExternalLink from './ExternalLink.svelte';
</script>

<!-- Mailchimp Signup Form -->
<section class="container mb-16 text-center bg-gray-light border-t-4 border-green-700 mj-container">
  <div id="mc_embed_signup">
    <form
      action="https://taocode.us6.list-manage.com/subscribe/post?u=43229d3d4d5354a0a9b5629fb&amp;id=32bdc2ddb0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <label for="mce-EMAIL" class="block pb-3 text-2xl font-bold font-display">
          Subscribe to my email list for more content!
        </label>
        <input
          type="email"
          value=""
          name="EMAIL"
          class="w-full px-5 py-3 mb-3 text-gray border border-gray rounded appearance-none hover:border-gray-500"
          id="mce-EMAIL"
          placeholder="johndoe@mail.com"
          required
        />
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div class="mailchimp-style" aria-hidden="true">
          <input
            type="text"
            name="b_43229d3d4d5354a0a9b5629fb_32bdc2ddb0"
            tabindex="{-1}"
            value=""
          />
        </div>
        <p class="text-xs text-gray-light">
          By clicking below to subscribe, you acknowledge that your information will be transferred
          to Mailchimp for processing.
          <ExternalLink href="https://mailchimp.com/legal/">
            Learn more about Mailchimp's privacy practices here.
          </ExternalLink>
        </p>
        <div class="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="w-full px-5 py-3 font-semibold font-display text-white bg-green-700 rounded cursor-pointer hover:bg-green-800"
          />
        </div>
      </div>
    </form>
  </div>
</section>
