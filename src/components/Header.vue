<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="success">
    <b-navbar-brand to="/">FreeMailNG</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="docs">Documentation</b-nav-item>
        <b-nav-item to="examples">Examples</b-nav-item>
      </b-navbar-nav>


      <b-navbar-nav class="ml-auto">
        <b-navbar-nav right>
            <b-nav-item href="https:github.com/octacondeveloper/freemail" target="_blank"> Github</b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>

      
    </b-collapse>
  </b-navbar>

</div>

</template>

<script>
export default {
}
</script>