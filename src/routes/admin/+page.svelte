<script>
  import src from "/src/icons/back-svgrepo-com.png";
  import {
    useForm,
    validators,
    HintGroup,
    Hint,
    email,
    required,
  } from "svelte-use-form";

  const form = useForm();
</script>

<svelte:head>
  <title>Admin Page</title>
</svelte:head>

<a href="/" class="flex items-center hover:underline"
  ><img {src} alt="back" class="w-[1.6vw] mr-2" />Back to homepage</a
>

<div class="flex flex-col h-[100vh] justify-center item-center">
  <h1 class="text-center text-4xl">Admin Login</h1>

  <div>
    <form
      use:form
      class="flex flex-col w-1/4 aspect-video mx-auto justify-center"
    >
      <input
        type="email"
        name="email"
        use:validators={[required, email]}
        placeholder="Enter your adminID"
      />
      <HintGroup for="email">
        <Hint on="required">This is a mandatory field</Hint>
        <Hint on="email" hideWhenRequired>Email is not valid</Hint>
      </HintGroup>

      <input
        type="password"
        name="password"
        use:validators={[required]}
        placeholder="Enter your password"
        class="my-3"
      />
      <Hint for="password" on="required">This is a mandatory field</Hint>

      <button
        disabled={!$form.valid}
        class="border border-4 border-black w-1/2 mx-auto py-1">Login</button
      >
    </form>
  </div>
</div>
