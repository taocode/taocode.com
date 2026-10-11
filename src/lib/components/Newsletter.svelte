<script>
  import ExternalLink from './ExternalLink.svelte';
</script>

<!-- Mailchimp Signup Form -->
<section
  class="mj-container container mb-16 border-t-4 border-green-700 bg-gray-light text-center">
  <div id="mc_embed_signup">
    <form
      action="https://taocode.us6.list-manage.com/subscribe/post?u=43229d3d4d5354a0a9b5629fb&id=32bdc2ddb0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="form"
      novalidate>
      <div id="mc_embed_signup_scroll">
        <label
          for="mce-EMAIL"
          class="block pb-3 font-display text-2xl font-bold">
          Subscribe to my email list for more content!
        </label>
        <input
          type="email"
          value=""
          name="EMAIL"
          class="text-gray border-gray mb-3 w-full appearance-none rounded border px-5 py-3 hover:border-gray-500"
          id="mce-EMAIL"
          placeholder="johndoe@mail.com"
          required />
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div class="mailchimp-style" aria-hidden="true">
          <input
            type="text"
            name="b_43229d3d4d5354a0a9b5629fb_32bdc2ddb0"
            tabindex={-1}
            value="" />
        </div>
        <p class="text-xs text-gray-light">
          By clicking below to subscribe, you acknowledge that your information
          will be transferred to Mailchimp for processing.
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
            class="preset-filled-primary btn w-full cursor-pointer rounded font-display font-semibold btn-lg" />
        </div>
      </div>
    </form>
  </div>
</section>

<style>
  .mailchimp-style {
    position: absolute;
    left: -5000px;
  }
</style>
